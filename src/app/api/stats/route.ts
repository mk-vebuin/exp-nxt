import { NextRequest, NextResponse } from "next/server";

// Mock data - in a real app this would come from a database
const mockExpenses = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Grocery Shopping",
    category: "Food",
    amount: -1250,
    paymentMethod: "UPI",
    tags: ["groceries", "weekly"],
    userId: "user1",
  },
  {
    id: 2,
    date: "2024-01-15",
    description: "Fuel",
    category: "Transport",
    amount: -2000,
    paymentMethod: "Card",
    tags: ["fuel", "car"],
    userId: "user1",
  },
  {
    id: 3,
    date: "2024-01-14",
    description: "Office Lunch",
    category: "Food",
    amount: -450,
    paymentMethod: "Cash",
    tags: ["lunch", "office"],
    userId: "user1",
  },
  {
    id: 4,
    date: "2024-01-01",
    description: "Monthly Salary",
    category: "Income",
    amount: 55000,
    paymentMethod: "Bank",
    tags: ["salary", "income"],
    userId: "user1",
  },
  {
    id: 5,
    date: "2024-01-12",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: -1899,
    paymentMethod: "Card",
    tags: ["electronics", "online"],
    userId: "user1",
  },
];

// GET /api/stats - Get expense statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period") || "month"; // week, month, year

    // Calculate statistics
    const totalExpenses = mockExpenses
      .filter((e) => e.amount < 0)
      .reduce((sum, e) => sum + Math.abs(e.amount), 0);

    const totalIncome = mockExpenses
      .filter((e) => e.amount > 0)
      .reduce((sum, e) => sum + e.amount, 0);

    const netAmount = totalIncome - totalExpenses;

    // Category breakdown
    const categoryStats: Record<string, { amount: number; count: number }> = {};
    mockExpenses
      .filter((e) => e.amount < 0)
      .forEach((expense) => {
        const category = expense.category;
        if (!categoryStats[category]) {
          categoryStats[category] = { amount: 0, count: 0 };
        }
        categoryStats[category].amount += Math.abs(expense.amount);
        categoryStats[category].count += 1;
      });

    const categoryBreakdown = Object.entries(categoryStats)
      .map(([category, stats]) => ({
        category,
        amount: stats.amount,
        count: stats.count,
        percentage: Math.round((stats.amount / totalExpenses) * 100),
      }))
      .sort((a, b) => b.amount - a.amount);

    // Payment method breakdown
    const paymentStats: Record<string, { amount: number; count: number }> = {};
    mockExpenses
      .filter((e) => e.amount < 0)
      .forEach((expense) => {
        const method = expense.paymentMethod;
        if (!paymentStats[method]) {
          paymentStats[method] = { amount: 0, count: 0 };
        }
        paymentStats[method].amount += Math.abs(expense.amount);
        paymentStats[method].count += 1;
      });

    const paymentBreakdown = Object.entries(paymentStats)
      .map(([method, stats]) => ({
        method,
        amount: stats.amount,
        count: stats.count,
        percentage: Math.round((stats.amount / totalExpenses) * 100),
      }))
      .sort((a, b) => b.amount - a.amount);

    // Recent trends (mock data)
    const trends = {
      expenseGrowth: 8, // percentage
      incomeGrowth: 12, // percentage
      topSpendingCategory: categoryBreakdown[0]?.category || "N/A",
      averageDaily: Math.round(totalExpenses / 30), // rough daily average
    };

    return NextResponse.json({
      success: true,
      data: {
        summary: {
          totalExpenses,
          totalIncome,
          netAmount,
          transactionCount: mockExpenses.length,
          period,
        },
        categoryBreakdown,
        paymentBreakdown,
        trends,
      },
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch statistics" },
      { status: 500 },
    );
  }
}

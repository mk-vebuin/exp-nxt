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

// GET /api/expenses - Fetch all expenses
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const category = searchParams.get("category");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");

    let filteredExpenses = [...mockExpenses];

    // Filter by category
    if (category) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.category.toLowerCase() === category.toLowerCase(),
      );
    }

    // Filter by date range
    if (dateFrom) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.date >= dateFrom,
      );
    }
    if (dateTo) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.date <= dateTo,
      );
    }

    // Apply limit
    if (limit) {
      filteredExpenses = filteredExpenses.slice(0, parseInt(limit));
    }

    return NextResponse.json({
      success: true,
      data: filteredExpenses,
      total: filteredExpenses.length,
    });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch expenses" },
      { status: 500 },
    );
  }
}

// POST /api/expenses - Create a new expense
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.amount || !body.category || !body.description) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: amount, category, description",
        },
        { status: 400 },
      );
    }

    // Create new expense
    const newExpense = {
      id: mockExpenses.length + 1,
      date: body.date || new Date().toISOString().split("T")[0],
      description: body.description,
      category: body.category,
      amount: parseFloat(body.amount),
      paymentMethod: body.paymentMethod || "Cash",
      tags: body.tags || [],
      userId: "user1", // In a real app, this would come from authentication
      createdAt: new Date().toISOString(),
    };

    // In a real app, this would be saved to a database
    mockExpenses.push(newExpense);

    return NextResponse.json(
      {
        success: true,
        data: newExpense,
        message: "Expense created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating expense:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create expense" },
      { status: 500 },
    );
  }
}

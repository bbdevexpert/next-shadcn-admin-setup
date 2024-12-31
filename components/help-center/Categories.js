export function Categories() {
  const categories = [
    {
      title: "Account Management",
      description: "Learn how to manage your account.",
    },
    {
      title: "Billing & Payments",
      description: "Find details about billing and transactions.",
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues.",
    },
    {
      title: "Product Features",
      description: "Explore features of our product.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-bold text-lg mb-2">{category.title}</h3>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      ))}
    </div>
  );
}

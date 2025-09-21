import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WalletConnect from "@/components/WalletConnect";
import PropertyCard from "@/components/PropertyCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState<"overview" | "properties">("overview");

  const properties = [
    {
      title: "Metropolitan Tower",
      location: "New York, NY",
      totalValue: "$15.2M",
      tokenized: "85%",
      investors: 247,
      encrypted: true,
      exposure: "+12.3%"
    },
    {
      title: "Riverside Complex",
      location: "San Francisco, CA", 
      totalValue: "$8.7M",
      tokenized: "92%",
      investors: 156,
      encrypted: true,
      exposure: "+8.1%"
    },
    {
      title: "Downtown Plaza",
      location: "Chicago, IL",
      totalValue: "$22.1M", 
      tokenized: "67%",
      investors: 389,
      encrypted: true,
      exposure: "+15.7%"
    }
  ];

  return (
    <div className="min-h-screen blueprint-grid">
      {/* Header */}
      <header className="border-b border-border/30 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-blueprint transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-border/30" />
              <img src={logoImage} alt="Logo" className="w-8 h-8" />
              <h1 className="text-xl font-bold text-blueprint">Dashboard</h1>
            </div>
            <WalletConnect />
          </div>
        </div>
      </header>

      {/* Dashboard Navigation */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => setSelectedView("overview")}
            className={selectedView === "overview" ? "btn-blueprint" : "btn-glass"}
          >
            Portfolio Overview
          </Button>
          <Button
            onClick={() => setSelectedView("properties")}
            className={selectedView === "properties" ? "btn-blueprint" : "btn-glass"}
          >
            Properties
          </Button>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="container mx-auto px-6 pb-16">
        {selectedView === "overview" && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-blueprint">Portfolio Overview</h2>
              <p className="text-muted-foreground">Comprehensive view of your real estate investments</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="card-blueprint">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
                  <p className="text-3xl font-bold text-blueprint">$46.0M</p>
                  <p className="text-sm text-accent">+12.1% this month</p>
                </div>
              </Card>
              <Card className="card-blueprint">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Active Properties</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">3 new this quarter</p>
                </div>
              </Card>
              <Card className="card-blueprint">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Investors</p>
                  <p className="text-3xl font-bold text-accent">792</p>
                  <p className="text-sm text-accent">+23 this week</p>
                </div>
              </Card>
              <Card className="card-blueprint">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Tokenization Rate</p>
                  <p className="text-3xl font-bold text-primary">81%</p>
                  <p className="text-sm text-muted-foreground">Across all properties</p>
                </div>
              </Card>
            </div>

            {/* Monthly Performance Chart */}
            <Card className="card-blueprint">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Monthly Performance</h3>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <p>Performance chart visualization would be implemented here</p>
                </div>
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="card-blueprint">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Recent Transactions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Metropolitan Tower - Token Purchase</p>
                      <p className="text-sm text-muted-foreground">Yesterday, 2:34 PM</p>
                    </div>
                    <p className="text-accent font-medium">+$125,000</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Riverside Complex - Dividend Payment</p>
                      <p className="text-sm text-muted-foreground">3 days ago, 10:15 AM</p>
                    </div>
                    <p className="text-accent font-medium">+$8,750</p>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium text-foreground">Downtown Plaza - New Investment</p>
                      <p className="text-sm text-muted-foreground">1 week ago, 4:22 PM</p>
                    </div>
                    <p className="text-accent font-medium">+$250,000</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {selectedView === "properties" && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-blueprint">Properties</h2>
              <p className="text-muted-foreground">Explore and manage your tokenized real estate portfolio</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
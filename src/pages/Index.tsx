import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WalletConnect from "@/components/WalletConnect";
import RotatingSkyline from "@/components/RotatingSkyline";
import { Building, Shield, Eye, TrendingUp, Database } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Index = () => {

  return (
    <div className="min-h-screen blueprint-grid">
      {/* Header */}
      <header className="border-b border-border/30 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="Logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-blueprint">FHE Estate</h1>
            </div>
            <WalletConnect />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-blueprint">Confidential Real Estate</span><br />
              <span className="text-foreground">on FHE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary real estate tokenization with fully homomorphic encryption. 
              Transparent exposure, confidential ownership.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="glass-card px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              FHE Encrypted
            </Badge>
            <Badge variant="secondary" className="glass-card px-4 py-2">
              <Database className="mr-2 h-4 w-4" />
              On-Chain Verified
            </Badge>
            <Badge variant="secondary" className="glass-card px-4 py-2">
              <Eye className="mr-2 h-4 w-4" />
              Selective Transparency
            </Badge>
          </div>

          <div className="pt-8">
            <Link to="/dashboard">
              <Button className="btn-blueprint text-lg px-8 py-6">
                Enter Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-blueprint text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Privacy First</h3>
            <p className="text-muted-foreground">
              Ownership details encrypted with FHE technology, visible only to verified parties.
            </p>
          </Card>

          <Card className="card-blueprint text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-accent/20">
                <Building className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Tokenized Assets</h3>
            <p className="text-muted-foreground">
              Real estate fractionally owned through blockchain tokens with regulatory compliance.
            </p>
          </Card>

          <Card className="card-blueprint text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-secondary/20">
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Aggregate Exposure</h3>
            <p className="text-muted-foreground">
              Investors see portfolio exposure and returns without revealing individual ownership.
            </p>
          </Card>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border/30 glass-card mt-16">
        <div className="container mx-auto px-6 py-8">
          <RotatingSkyline />
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <img src={logoImage} alt="Logo" className="w-8 h-8" />
              <span className="text-lg font-semibold text-blueprint">FHE Estate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Confidential real estate tokenization powered by fully homomorphic encryption
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 FHE Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
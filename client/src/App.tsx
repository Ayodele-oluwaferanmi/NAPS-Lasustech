import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home, { AdminView, MaterialsView, PortalView, VerifyView } from "./pages/Home";
import { ContentView, LoginView, PayDuesView, ReceiptView, RegisterView } from "./pages/FeatureViews";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={LoginView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/portal" component={PortalView} />
      <Route path="/materials" component={MaterialsView} />
      <Route path="/pay-dues" component={PayDuesView} />
      <Route path="/receipt" component={ReceiptView} />
      <Route path="/verify/:token" component={VerifyView} />
      <Route path="/admin" component={AdminView} />
      <Route path="/admin/content" component={ContentView} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

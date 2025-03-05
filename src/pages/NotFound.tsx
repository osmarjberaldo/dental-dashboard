
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto bg-dental-primary/10 rounded-full flex items-center justify-center">
          <FileQuestion className="h-10 w-10 text-dental-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-dental-secondary">404</h1>
          <p className="text-xl text-dental-secondary">Page not found</p>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="pt-4">
          <Link to="/">
            <Button className="bg-dental-primary hover:bg-dental-primary-dark flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

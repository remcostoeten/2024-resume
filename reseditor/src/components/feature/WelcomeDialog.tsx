import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Star, CheckCircle } from "lucide-react";

type TProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function WelcomeDialog({ open, onOpenChange }: TProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl flex items-center gap-3 text-foreground">
            <Star className="w-7 h-7 text-yellow-500" />
            Welcome to Resume Builder
          </DialogTitle>
          <DialogDescription className="text-lg text-foreground mt-4">
            <p className="mb-8">Create a professional resume in minutes with our easy-to-use builder!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-base text-foreground mb-2">Rich Text Editing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Format text with bold, italic, bullets, and links</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-base text-foreground mb-2">Multiple Export Options</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Download as PDF or HTML</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-base text-foreground mb-2">Professional Templates</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Choose from multiple designs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-base text-foreground mb-2">Smart Suggestions</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Get writing tips and skill recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mt-8 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 text-base">💡 Pro Tips:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2 leading-relaxed">
                <li>• Use the rich text editor to format your descriptions</li>
                <li>• Start with your personal information</li>
                <li>• Use action verbs and quantify achievements</li>
                <li>• Export as HTML for easy online sharing</li>
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-6 border-t">
          <Button 
            onClick={() => onOpenChange(false)} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium"
          >
            Get Started
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

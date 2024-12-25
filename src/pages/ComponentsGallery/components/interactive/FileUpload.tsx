import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, File, X } from 'lucide-react';

export function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">File Upload</h4>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="file-upload">Upload File</Label>
          <div className="flex items-center gap-2">
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              data-testid="file-input"
            />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => document.getElementById('file-upload')?.click()}
              data-testid="upload-trigger"
            >
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </div>
        </div>
      </div>

      {selectedFile && (
        <div 
          className="flex items-center gap-2 p-2 border rounded-md bg-muted"
          data-testid="file-preview"
        >
          <File className="h-4 w-4" />
          <span className="text-sm flex-1 truncate">{selectedFile.name}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleRemoveFile}
            data-testid="remove-file"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
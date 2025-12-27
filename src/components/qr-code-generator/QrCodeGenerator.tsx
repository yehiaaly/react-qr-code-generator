import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [input, setInput] = useState("");

  const isInputEmpty = input.trim() === "";

  return (
    <Card className="mx-auto my-12 w-md px-4 py-8">
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
        <CardDescription>
          Enter a value below to generate your custom QR code.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex justify-between gap-4">
          <Input
            type="text"
            placeholder="enter a value"
            name="qr-code"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button disabled={isInputEmpty} onClick={() => setQrCodeValue(input)}>
            Generate
          </Button>
        </div>
        {useMemo(
          () => (
            <QRCode className="mx-auto" value={qrCodeValue} />
          ),
          [qrCodeValue],
        )}
      </CardContent>
    </Card>
  );
};

export default QrCodeGenerator;

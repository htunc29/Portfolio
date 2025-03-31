"use client";
import { title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";
import { CircularProgress } from "@heroui/progress";
import { Alert } from "@heroui/alert";
export default function ContactPage() {
    const [submitted, setSubmitted] = useState<{ [key: string]: FormDataEntryValue } | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Bilinmeyen hata");

            setSubmitted(data);
            setSuccess("Mesajınız başarıyla gönderildi.");
            e.target.reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className={title()}>İletişim</h1>
            <div className={"mt-8 flex justify-center"}>
                <Form className="w-full max-w-xs" onSubmit={onSubmit}>
                    <Input isRequired errorMessage="Lütfen adınızı giriniz" label="Ad Soyad" name="ad" placeholder="Adınızı giriniz" type="text" />
                    <Input isRequired errorMessage="Lütfen geçerli bir mail giriniz" label="Email" name="email" placeholder="Emailinizi giriniz" type="email" />
                    <Textarea isRequired errorMessage="Lütfen mesajınızı giriniz" label="Mesajınız" name="mesaj" placeholder="Mesajınızı yazın" />
                    <Button type="submit" className="w-full" color={"primary"} variant={"flat"} disabled={loading}>
                        {loading ? (
                            <div className="flex items-center">
                                
                                Gönderiliyor...
                                <CircularProgress size="sm"  className="ml-2" />
                            </div>
                        ) : "Gönder"}
                    </Button>
                    {error && <Alert color="danger" className="text-red-500" title={error}/>}
                    {success && <Alert color="success" className="text-green-500" title={success}/>}
                </Form>
            </div>
        </div>
    );
}

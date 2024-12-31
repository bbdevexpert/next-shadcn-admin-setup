"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { CommonInput, CommonButton } from "@/components/common";

export function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);
    const { pending } = useFormStatus();

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={loginAction} className="flex flex-col gap-6 mb-6">
                        <CommonInput id="email" name="email" label='Email' placeholder="Email" error={state?.errors?.email} />
                        <CommonInput label='Password' id="password" name="password" type="password" placeholder="Password" error={state?.errors?.password} />
                        <CommonButton disabled={pending} type="submit" name="Login" />
                    </form>
                    <CommonButton variant="outline" className="w-full" name="Login with Google" />
                    <div className="pt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="underline underline-offset-4">
                            Sign up
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
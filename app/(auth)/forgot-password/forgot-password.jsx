import { GalleryVerticalEnd } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { CommonInput, CommonButton } from "@/components/common";

export function ForgotPassword() {
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Forgot Password</CardTitle>
                    <CardDescription>
                        Enter your registered email and <br />
                        we will send you a link to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6 mb-6">
                        <CommonInput id="email" name="email" label='Email' placeholder="Email" />
                        <CommonButton type="submit" name="Continue" />
                    </form>
                    <div className="pt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <a href="/sign-up" className="underline underline-offset-4">
                            Sign up
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

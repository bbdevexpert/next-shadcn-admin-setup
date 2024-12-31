import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { CommonInput, CommonButton } from "@/components/common";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export function Otp() {
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Two-factor Authentication</CardTitle>
                    <CardDescription>
                        Please enter the authentication code. <br />
                        We have sent the authentication code to your email.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6 mb-6">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                        <CommonButton type="submit" name="Continue" />
                    </form>
                    <div className="pt-4 text-center text-sm">
                        Haven't received it?{' '}
                        <a href="#" className="underline underline-offset-4">
                            Resend a new code..
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

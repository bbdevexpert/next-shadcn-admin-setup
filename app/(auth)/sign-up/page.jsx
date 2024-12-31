import { SignUp } from "./sign-up"

export default function Page() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-md">
                <SignUp />
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, BarChart, Shield, Book, Headphones } from 'lucide-react'

const IconWrapper = ({ children }) => (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        {children}
    </div>
)

export function MegaMenuProducts() {
    return (
        <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <IconWrapper><Zap className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Measure and optimize your product performance</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Learn more &rarr;</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <IconWrapper><BarChart className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Engagement</CardTitle>
                    <CardDescription>Increase user interaction and retention</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Learn more &rarr;</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <IconWrapper><Shield className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Protect your data and your users</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Learn more &rarr;</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export function MegaMenuSolutions() {
    return (
        <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <h3 className="text-lg font-semibold mb-2">By Industry</h3>
                <ul className="space-y-2">
                    <li><Button variant="link" className="p-0">E-commerce</Button></li>
                    <li><Button variant="link" className="p-0">SaaS</Button></li>
                    <li><Button variant="link" className="p-0">Healthcare</Button></li>
                    <li><Button variant="link" className="p-0">Finance</Button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">By Team</h3>
                <ul className="space-y-2">
                    <li><Button variant="link" className="p-0">Engineering</Button></li>
                    <li><Button variant="link" className="p-0">Product</Button></li>
                    <li><Button variant="link" className="p-0">Marketing</Button></li>
                    <li><Button variant="link" className="p-0">Sales</Button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">By Size</h3>
                <ul className="space-y-2">
                    <li><Button variant="link" className="p-0">Startups</Button></li>
                    <li><Button variant="link" className="p-0">SMBs</Button></li>
                    <li><Button variant="link" className="p-0">Enterprise</Button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Case Studies</h3>
                <ul className="space-y-2">
                    <li><Button variant="link" className="p-0">Success Stories</Button></li>
                    <li><Button variant="link" className="p-0">ROI Calculator</Button></li>
                    <li><Button variant="link" className="p-0">Testimonials</Button></li>
                </ul>
            </div>
        </div>
    )
}

export function MegaMenuResources() {
    return (
        <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <IconWrapper><Book className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>Comprehensive guides and API references</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Explore docs &rarr;</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <IconWrapper><Check className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Best Practices</CardTitle>
                    <CardDescription>Learn from industry experts and our team</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Read articles &rarr;</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <IconWrapper><Headphones className="h-6 w-6" /></IconWrapper>
                    <CardTitle>Support</CardTitle>
                    <CardDescription>Get help from our dedicated support team</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0">Contact us &rarr;</Button>
                </CardContent>
            </Card>
        </div>
    )
}


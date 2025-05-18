import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageSquare, Shield, Star, Users, Briefcase, DollarSign } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SkillBridge</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Browse Jobs
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Find Talent
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Vetting
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Login
            </Link>
            <Button size="sm">Get Started</Button>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Where Skills Meet Opportunities
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with top freelancers and clients on SkillBridge. Find your next project or hire skilled
                    professionals for your business needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Join Now
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  SkillBridge makes it easy to connect freelancers with clients in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Step 1: Create Profile</CardTitle>
                <CardDescription className="text-center">
                  Build your professional profile and showcase your skills.
                </CardDescription>
              </Card>

              <Card className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Step 2: Get Vetted</CardTitle>
                <CardDescription className="text-center">
                  Pass our quality verification process for better opportunities.
                </CardDescription>
              </Card>

              <Card className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Step 3: Post or Apply</CardTitle>
                <CardDescription className="text-center">
                  Post projects as a client or apply for jobs as a freelancer.
                </CardDescription>
              </Card>

              <Card className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Step 4: Secure Payment</CardTitle>
                <CardDescription className="text-center">
                  Get paid securely for your completed work through our platform.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  SkillBridge offers powerful tools to make freelancing and hiring simple and secure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Secure Payments</CardTitle>
                  <Shield className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verified, secure payment processing for all transactions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Smart Matching</CardTitle>
                  <Star className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI-powered talent matching based on skills and requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Direct Messaging</CardTitle>
                  <MessageSquare className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seamless communication between clients and freelancers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Quality Assurance</CardTitle>
                  <Check className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thorough vetting process ensures top-quality professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="vetting">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Vetting Process</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We ensure only the most qualified professionals join our platform through a rigorous vetting process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Identity Verification</h3>
                <p className="text-center text-muted-foreground">
                  We verify the identity of all freelancers to ensure authenticity and trust.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Portfolio Screening</h3>
                <p className="text-center text-muted-foreground">
                  Our experts review work samples to assess quality and expertise.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Live Interviews</h3>
                <p className="text-center text-muted-foreground">
                  Candidates undergo interviews to evaluate communication and professional skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from freelancers and clients who have found success on SkillBridge.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Sarah Johnson"
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="font-bold">Sarah Johnson</h3>
                      <h4 className="text-sm text-muted-foreground">Freelance Web Developer</h4>
                      <p className="text-sm text-muted-foreground">
                        "SkillBridge helped me find consistent clients and grow my freelance business. The vetting
                        process ensures quality projects."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Michael Chen"
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="font-bold">Michael Chen</h3>
                      <h4 className="text-sm text-muted-foreground">Startup Founder</h4>
                      <p className="text-sm text-muted-foreground">
                        "As a startup founder, I needed quality talent quickly. SkillBridge connected me with pre-vetted
                        professionals who delivered exceptional work."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Elena Rodriguez"
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="font-bold">Elena Rodriguez</h3>
                      <h4 className="text-sm text-muted-foreground">Marketing Specialist</h4>
                      <p className="text-sm text-muted-foreground">
                        "The platform's ease of use and secure payment system make it my go-to for finding new clients
                        and managing projects."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing Plans</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individuals just getting started</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Post up to 3 jobs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic messaging</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to freelancer profiles</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$49</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited job postings</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Featured job listings</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced messaging</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For enterprise clients</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$99</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All Standard features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Bulk hiring tools</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>Freelancers can join and create profiles for free.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="cta">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of freelancers and businesses already using SkillBridge to connect, collaborate, and
                  succeed.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Hire Talent
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Find Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">SkillBridge</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Help Center
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

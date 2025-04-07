"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  CalendarIcon,
  Ambulance,
  UserRound,
  Phone,
  Clock,
  MapPin,
  Heart,
  Newspaper,
  Search,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false)
  const [bookingType, setBookingType] = useState<string>("")
  const [searchSpecialty, setSearchSpecialty] = useState<string>("")

  const handleBooking = (type: string) => {
    // In a real app, this would send data to a backend
    console.log(`${type} booking submitted`)
    setBookingSuccess(true)
    setBookingType(type)

    // Reset form after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false)
    }, 3000)
  }

  // Medical news data
  const medicalNews = [
    {
      id: 1,
      title: "New Research Shows Promise in Treating Heart Disease",
      excerpt: "A groundbreaking study reveals potential new treatments for cardiovascular conditions.",
      date: "April 5, 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "COVID-19 Vaccine Booster Recommendations Updated",
      excerpt: "Health authorities have released new guidelines for COVID-19 booster shots.",
      date: "April 3, 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Advancements in Telemedicine Improving Rural Healthcare Access",
      excerpt: "Digital health technologies are bridging the gap for patients in remote areas.",
      date: "April 1, 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Patient",
      content:
        "The doctor appointment booking was so easy to use. I got an appointment with a specialist the same week, which would normally take months!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Emergency Patient",
      content:
        "The ambulance arrived within minutes of my call. The paramedics were professional and caring. They saved my life.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Regular Patient",
      content:
        "I've been using Medico for all my family's healthcare needs. The doctors are excellent and the booking system is convenient.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Medical services data
  const medicalServices = [
    {
      id: 1,
      title: "General Consultation",
      description: "Comprehensive health check-ups and consultations for all age groups",
      icon: <UserRound className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
    {
      id: 2,
      title: "Specialized Care",
      description: "Expert treatment from specialists in cardiology, neurology, orthopedics and more",
      icon: <Heart className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
    {
      id: 3,
      title: "Emergency Services",
      description: "24/7 emergency medical services with rapid response ambulances",
      icon: <Ambulance className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
    {
      id: 4,
      title: "Diagnostic Tests",
      description: "Comprehensive range of laboratory and imaging diagnostic services",
      icon: <Search className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
    {
      id: 5,
      title: "Home Healthcare",
      description: "Medical care services provided at the comfort of your home",
      icon: <MapPin className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
    {
      id: 6,
      title: "Telemedicine",
      description: "Virtual consultations with healthcare professionals from anywhere",
      icon: <Phone className="h-8 w-8 text-sky-500" />,
      link: "#",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-sky-500" />
            <span className="hidden font-bold sm:inline-block">Medico</span>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <Button>Login</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Quick Appointment Finder */}
        <section className="relative bg-gradient-to-b from-sky-50 to-white py-16 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Your Health, Our Priority</h1>
                <p className="text-lg text-muted-foreground">
                  Book appointments with top doctors or request emergency ambulance services with just a few clicks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
                    Book Doctor
                  </Button>
                  <Button size="lg" variant="outline" className="border-sky-500 text-sky-500">
                    Emergency Services
                  </Button>
                </div>
              </div>

              {/* Quick Appointment Finder - Replaces 3D element */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Find a Doctor Now</h2>
                <p className="text-muted-foreground mb-6">Quick search for available appointments with specialists</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Medical Specialty</Label>
                    <Select value={searchSpecialty} onValueChange={setSearchSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="general">General Medicine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Your Location</Label>
                    <Input id="location" placeholder="Enter zip code or city" />
                  </div>

                  <Button className="w-full bg-sky-500 hover:bg-sky-600">Find Available Doctors</Button>

                  <div className="text-center text-sm text-muted-foreground pt-2">
                    <p>
                      Need urgent care?{" "}
                      <a href="#" className="text-sky-600 font-medium">
                        Call our 24/7 hotline
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Services Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Medical Services</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Comprehensive healthcare services for you and your family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalServices.map((service) => (
                <Card key={service.id} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href={service.link} className="flex items-center">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Doctors */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Top Specialists</h2>
              <p className="text-muted-foreground mt-2">Experienced doctors ready to provide the best care</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Sarah Johnson"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Dr. Sarah Johnson</CardTitle>
                  <CardDescription>Cardiologist</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Michael Chen"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Dr. Michael Chen</CardTitle>
                  <CardDescription>Neurologist</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Emily Rodriguez"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Dr. Emily Rodriguez</CardTitle>
                  <CardDescription>Pediatrician</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. James Wilson"
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Dr. James Wilson</CardTitle>
                  <CardDescription>Orthopedic Surgeon</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-muted-foreground mt-2">Book a doctor appointment or request emergency services</p>
            </div>

            {bookingSuccess ? (
              <div className="max-w-md mx-auto bg-green-100 p-6 rounded-lg border border-green-200 text-center">
                <h3 className="text-xl font-semibold text-green-800">Booking Successful!</h3>
                <p className="mt-2 text-green-700">
                  Your {bookingType} booking has been confirmed. We'll contact you shortly with more details.
                </p>
              </div>
            ) : (
              <Tabs defaultValue="doctor" className="max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="doctor">Doctor Appointment</TabsTrigger>
                  <TabsTrigger value="ambulance">Ambulance Service</TabsTrigger>
                </TabsList>

                {/* Doctor Booking Tab */}
                <TabsContent value="doctor">
                  <Card>
                    <CardHeader>
                      <CardTitle>Book a Doctor Appointment</CardTitle>
                      <CardDescription>
                        Fill in your details to schedule an appointment with one of our specialists.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Specialist</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select specialist" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiologist">Cardiologist</SelectItem>
                              <SelectItem value="dermatologist">Dermatologist</SelectItem>
                              <SelectItem value="neurologist">Neurologist</SelectItem>
                              <SelectItem value="orthopedic">Orthopedic</SelectItem>
                              <SelectItem value="pediatrician">Pediatrician</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Appointment Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Time</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                              <SelectItem value="evening">Evening (6PM - 9PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="symptoms">Symptoms or Reason for Visit</Label>
                        <Textarea
                          id="symptoms"
                          placeholder="Please describe your symptoms or reason for the appointment"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-500 hover:bg-sky-600" onClick={() => handleBooking("doctor")}>
                        Book Appointment
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Ambulance Booking Tab */}
                <TabsContent value="ambulance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request Ambulance Service</CardTitle>
                      <CardDescription>
                        For medical emergencies, please call 911. Use this form for non-emergency transport.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="patient-name">Patient Name</Label>
                          <Input id="patient-name" placeholder="Patient's full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-phone">Contact Phone</Label>
                          <Input id="contact-phone" placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pickup-address">Pickup Address</Label>
                        <Textarea id="pickup-address" placeholder="Full address including apartment/unit number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input id="destination" placeholder="Hospital or medical facility name" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label>Pickup Time</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                              <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medical-needs">Special Medical Needs</Label>
                        <Textarea
                          id="medical-needs"
                          placeholder="Describe any special medical needs or equipment required"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-500 hover:bg-sky-600" onClick={() => handleBooking("ambulance")}>
                        Request Ambulance
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </section>

        {/* Ambulance Services Showcase */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Ambulance Fleet</h2>
              <p className="text-muted-foreground mt-2">Modern vehicles equipped with advanced medical technology</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Emergency Ambulance"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Emergency Response</CardTitle>
                  <CardDescription>
                    Fully equipped emergency ambulances with advanced life support systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Patient Transport"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Patient Transport</CardTitle>
                  <CardDescription>Comfortable vehicles for non-emergency medical transportation</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mobile ICU"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Mobile ICU</CardTitle>
                  <CardDescription>Intensive care units on wheels for critical patients</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What Our Patients Say</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Real experiences from people who have used our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-t-4 border-t-sky-500">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline">View More Testimonials</Button>
            </div>
          </div>
        </section>

        {/* Medical News Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold">Latest Medical News</h2>
                <p className="text-muted-foreground mt-2">Stay informed with the latest healthcare updates</p>
              </div>
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <Newspaper className="h-4 w-4" />
                View All News
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {medicalNews.map((news) => (
                <Card key={news.id}>
                  <CardContent className="p-0">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{news.date}</div>
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                    <CardDescription className="mt-2">{news.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="flex items-center gap-2 mx-auto">
                <Newspaper className="h-4 w-4" />
                View All News
              </Button>
            </div>
          </div>
        </section>

        {/* Health Tips Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Health Tips & Resources</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Useful information to help you maintain good health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-sky-50 border-none">
                <CardHeader className="pb-2">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Heart Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Exercise at least 30 minutes daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Maintain a balanced diet low in sodium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Regular blood pressure monitoring</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Learn more
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-sky-50 border-none">
                <CardHeader className="pb-2">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Sleep Better</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Maintain a consistent sleep schedule</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Create a restful environment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Limit screen time before bed</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Learn more
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-sky-50 border-none">
                <CardHeader className="pb-2">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <UserRound className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Mental Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Practice mindfulness meditation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Stay socially connected</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Seek help when feeling overwhelmed</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Learn more
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-sky-500 hover:bg-sky-600">View All Health Resources</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose Us</h2>
              <p className="text-muted-foreground mt-2">We provide the best healthcare services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <UserRound className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Expert Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our network includes top specialists and general practitioners with years of experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>24/7 Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our emergency services are available round the clock to ensure you get help when needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Ambulance className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Modern Ambulances</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fully equipped ambulances with advanced life support systems and trained paramedics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Easy Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simple online booking system that allows you to schedule appointments in minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Wide Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our services cover the entire city and surrounding areas for quick response times.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-sky-500">
                <CardHeader>
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle>Patient Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritize patient comfort and care throughout the entire process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sky-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Need Emergency Assistance?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Our emergency hotline is available 24/7. Call us now or use our online booking system for immediate
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Call Now: 1-800-MED-HELP
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-sky-600">
                Book Online
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-sky-400" />
                <span className="font-bold text-xl">Medico</span>
              </div>
              <p className="text-slate-400">Your trusted partner for medical appointments and emergency services.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Doctor Appointments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Emergency Ambulance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Medical Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Home Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-slate-400">
                <p>123 Medical Center Drive</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">Email: info@medico.com</p>
                <p>Phone: 1-800-MED-HELP</p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Medico. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


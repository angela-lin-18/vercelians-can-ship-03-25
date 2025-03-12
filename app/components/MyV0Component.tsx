import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GymSchedule() {
  const workoutSchedule = [
    {
      day: "Monday",
      focus: "Chest & Triceps",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
        { name: "Chest Flyes", sets: 3, reps: "12-15" },
        { name: "Tricep Pushdowns", sets: 3, reps: "12-15" },
        { name: "Overhead Tricep Extension", sets: 3, reps: "10-12" },
      ],
      time: "6:00 PM - 7:30 PM",
      intensity: "High",
    },
    {
      day: "Tuesday",
      focus: "Back & Biceps",
      exercises: [
        { name: "Pull-ups", sets: 4, reps: "8-10" },
        { name: "Bent Over Rows", sets: 3, reps: "10-12" },
        { name: "Lat Pulldowns", sets: 3, reps: "12-15" },
        { name: "Barbell Curls", sets: 3, reps: "10-12" },
        { name: "Hammer Curls", sets: 3, reps: "12-15" },
      ],
      time: "6:00 PM - 7:30 PM",
      intensity: "High",
    },
    {
      day: "Wednesday",
      focus: "Rest Day or Light Cardio",
      exercises: [
        { name: "Brisk Walking", sets: 1, reps: "30 min" },
        { name: "Stretching", sets: 1, reps: "15 min" },
      ],
      time: "5:30 PM - 6:15 PM",
      intensity: "Low",
    },
    {
      day: "Thursday",
      focus: "Legs & Core",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10" },
        { name: "Leg Press", sets: 3, reps: "10-12" },
        { name: "Lunges", sets: 3, reps: "12 each leg" },
        { name: "Calf Raises", sets: 4, reps: "15-20" },
        { name: "Planks", sets: 3, reps: "45 sec" },
        { name: "Russian Twists", sets: 3, reps: "20 each side" },
      ],
      time: "6:00 PM - 7:30 PM",
      intensity: "High",
    },
    {
      day: "Friday",
      focus: "Shoulders & Arms",
      exercises: [
        { name: "Overhead Press", sets: 4, reps: "8-10" },
        { name: "Lateral Raises", sets: 3, reps: "12-15" },
        { name: "Front Raises", sets: 3, reps: "12-15" },
        { name: "Bicep Curls", sets: 3, reps: "10-12" },
        { name: "Tricep Dips", sets: 3, reps: "10-12" },
      ],
      time: "6:00 PM - 7:30 PM",
      intensity: "High",
    },
    {
      day: "Saturday",
      focus: "Full Body or HIIT",
      exercises: [
        { name: "Burpees", sets: 3, reps: "15" },
        { name: "Mountain Climbers", sets: 3, reps: "30 sec" },
        { name: "Kettlebell Swings", sets: 3, reps: "15" },
        { name: "Box Jumps", sets: 3, reps: "12" },
        { name: "Battle Ropes", sets: 3, reps: "30 sec" },
      ],
      time: "10:00 AM - 11:15 AM",
      intensity: "Very High",
    },
    {
      day: "Sunday",
      focus: "Rest & Recovery",
      exercises: [
        { name: "Foam Rolling", sets: 1, reps: "15 min" },
        { name: "Stretching", sets: 1, reps: "20 min" },
        { name: "Light Walking", sets: 1, reps: "20 min" },
      ],
      time: "Any time",
      intensity: "Very Low",
    },
  ]

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Very High":
        return "bg-red-500 hover:bg-red-600"
      case "High":
        return "bg-orange-500 hover:bg-orange-600"
      case "Medium":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "Low":
        return "bg-green-500 hover:bg-green-600"
      case "Very Low":
        return "bg-blue-500 hover:bg-blue-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Weekly Gym Schedule</h1>
        <p className="text-muted-foreground">Stay consistent with your fitness goals</p>
      </div>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="details">Workout Details</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {workoutSchedule.map((day) => (
              <Card key={day.day} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{day.day}</CardTitle>
                    <Badge className={`${getIntensityColor(day.intensity)} text-white`}>{day.intensity}</Badge>
                  </div>
                  <CardDescription>{day.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{day.time}</span>
                  </div>
                  <ul className="space-y-1">
                    {day.exercises.slice(0, 3).map((exercise, index) => (
                      <li key={index} className="text-sm">
                        • {exercise.name}
                      </li>
                    ))}
                    {day.exercises.length > 3 && (
                      <li className="text-sm text-muted-foreground">+ {day.exercises.length - 3} more</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-6">
          <div className="space-y-6">
            {workoutSchedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {day.day} - {day.focus}
                    </CardTitle>
                    <Badge className={`${getIntensityColor(day.intensity)} text-white`}>{day.intensity}</Badge>
                  </div>
                  <CardDescription className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{day.time}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Exercise</th>
                        <th className="text-center py-2">Sets</th>
                        <th className="text-center py-2">Reps</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((exercise, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-2">{exercise.name}</td>
                          <td className="text-center py-2">{exercise.sets}</td>
                          <td className="text-center py-2">{exercise.reps}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          Download Schedule
        </Button>
      </div>
    </div>
  )
}


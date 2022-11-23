# 1. Write a function called "nameFunction" have it print out your name. invoke the function

def  nameFunction():
    print("My name is Rokhaya")


#2. Define variable named Joe that is the string Joe

Joe = "Joe"
#3 Reinitialize Joe so that it is now the integer 4
Joe = 4

#4 Change Joe into a float
Joe = 4.7

#5. Create a list named students that includes 5 people from this class
students = ["rokhaya","vinny","jessika","mike","ethan"]

    #5a print the first item from the list(bonus for more than one way)
print(students[0])

    #5b print the last item from the list(bonus for more than one way)
print(students[-1])
    #5c How do I get the third item from the list?
print(students[2])
    #5d print the entire list not in brackets [student1, student2, etc...]
for student in students:
    print(student)
    #5e add "is cool" to the end of each name
for student in students:
    print(student + " is cool")
    #5f if the students name is your name add "IT ME!!" to the end
for student in students:
    if student == "rokhaya":
        print(student + "IT ME!!")
    #5g if you are not in the list print "I guess I'm not cool"
if "rokhaya" not in students:
    print("I guess I'm not cool")

    #5h list some methods to remove things from a list
def removeName():
    i = 0
    for student in len(students):
        i = i + 1
    students.pop(student[i])



#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"
School = {"Digital Crafts": "Bootcamp" ,
          "Instructor": "Joe",
          "TA": "Ethan"}
 
    #6a return the value of "Digital Crafts"
print(School.values())


#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)
class Car:
    def __init__(self, make, model, year, type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type
    
    #7a Instantiate 3 new Cars
mercedes = Car("Mercedes","x6", 2021, "suv")
acura = Car("Acura","rdx", 2022, "suv")
jeep = Car("Jeep", "rubicon", 2022, "truck")  

    #7b Add a method that allows you to see the make and model of a car in your terminal


def viewMakeAndModel(self):
    print(f" this car make is {self.make} and his model is {self.model}"  )


    #7c Use the above method on the second car
viewMakeAndModel(acura)

    #7d Add a method that is called "honkHorn" that prints "Beep Beep"

def honkHorn():
    print("Beep Beep")

honkHorn()
#Push this all to a repo on your github
#Paste github link of assignment page to: https://digitalcrafts.instructure.com/courses/225/assignments/9345
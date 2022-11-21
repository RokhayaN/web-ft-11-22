class Student:
    def __init__(self,name,age,ghUsername) -> None:
        self.name = name
        self.age = age
        self.ghUsername = ghUsername
    def greeting(self):
        print("hello my name is")  

rokhaya = Student("rokhaya", 2,"rokhayaN")   

#dot notation

print(rokhaya.age)
rokhaya.greeting()




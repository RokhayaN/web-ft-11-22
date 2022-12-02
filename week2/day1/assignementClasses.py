class phonebook:
    def __init__(self,name,number):
        self.name = name
        self.number = number

    def printMyName(self):
        print(f"My name is {self.name}")





user1 = {}

for user in range(1):
    name = input("Enter user name: ")
    number = input("Enter your number: ")
    
   
   
 #user[name]= number

print(user1)


user1 = {}
for user in range(1,4):
    print("input 3 contacts for your phonebook")
    name = input("Enter your name ")
    number = input("Enter your number: ")
    user1[name] = number
    print(user1)



    
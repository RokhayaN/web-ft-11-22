userChoice = input("What is your name? \n")


class User:
    def __init__(self,name,password):
        self.name = name
        self.password = password

    def printMyName(self):
        print(f"My name is {self.name}")

    def printMyPassword(self):
        print(f"My password is {self.password}")

user1 = User(userChoice, "1234")

keepGoing = "y"

while(keepGoing == "y"):

    print("""
    1. Password
    2. Name
    """)
    choice = input("what do you want to print?\n Choose 1 for Password, choose 2 for Name\n")
    if(choice == "2"):
        user1.printMyName()
    if(choice == "1"):
        user1.printMyPassword()
    if(choice != "1" or choice != "2"):
        print("Dude please pick a valid choice")
    keepGoing = input("Do you want to keep going? y or n \n")
class Phonebook:
    def __init__(self):
        self.PhoneNumbers = []
    def addEntry(self,usersEntry):
        self.PhoneNumbers.append(usersEntry)
    def printList(self):
        counter = 1
        for number in self.PhoneNumbers:
            print(f"""
           { counter+= number["name"]} : {number["number"]}         
            """)         
            
myPhoneBook = Phonebook()
userChoice = ""
while(True):
    if(userChoice == "y"):
        break
    userName = input("What is your name?\n")
    phoneNumber = input("What is your phone number?\n")
    usersEntry = {"name": userName, "number":phoneNumber}
    myPhoneBook.addEntry(usersEntry)
    myPhoneBook.printListOfNumbers()
    userChoice = input("Do you want to quit? y/n?")
    ##userDelete = input("do you want to delete a number y/n") . 







   # del_contact = input("Enter the contact to be deleted ")
       # if del_contact in contact:
           # confirm = input("Do you want to delete this contact y/n? ")
            #if confirm =='y' or confirm =='Y':
               # contact.pop(del_contact)
            #display_contact()
        #else:
            #print("Name is not found in contact book")
    #else:
      #  break


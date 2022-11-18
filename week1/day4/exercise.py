
# find me all the restaurants that start with U
# if
#  get me the last restaurant
# get me the second to last restaurant
# upperecase all the of the restaurants


favoriteRestaurants = ["Uchi","Town", "IronAge", "KBBQ","Fadi"]

for restaurant in favoriteRestaurants:
    if restaurant[0] == "U":
       print(restaurant.upper())

print(favoriteRestaurants[-1])
print(favoriteRestaurants[-2])
      


#Write a func that receive a list of restaurant  and print every restaurants 
#modify to most generic 

def printList(list):
    for item in list:
        print(item)

printList(favoriteRestaurants)


listOfFruit = []

def addFruit(fruit):
   print(listOfFruit.append(fruit))

addFruit("apple")
addFruit("banana")

print(listOfFruit)
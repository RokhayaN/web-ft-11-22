#Pets

#be able tomake noise
#def animaSound()

#have an owner
#def whoIsMyOwner()

#have a name
#def WhatsMyName()

#what kind of pet they are
#defWhatKindOfPet()


class Pet:
    def __init__(self, name, sound, owner, description):
        self.name = name
        self.sound = sound
        self.owner = owner
        self.description =description

    def animaSound(self):
        print(f"I making this sound {self.sound}")

    def whoIsMyOwner(self):
        print(f"My owner name is {self.owner}")  

    def WhatsMyName(self):
        print(f"My name is {self.name}")
        
    def defWhatKindOfPet(self):
        print(f"I am a {self.description}")


minou = Pet("minou", "meow meow", "rokhaya", "cat")
minou.whoIsMyOwner()
minou.defWhatKindOfPet()

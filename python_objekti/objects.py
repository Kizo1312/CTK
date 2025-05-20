
class Student:
    def __init__(self, name, age, ocjene):
        self.name =name
        self.age = age
        self.ocjene = ocjene
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Ocjene: {self.ocjene}"
    def __repr__(self):
        return f"Kaj god "
    def average(self):
        return sum(self.ocjene) / len(self.ocjene)
    
student = Student("Toma", 29, [2,5,4,3,5])
print(student.age)
print(student.average())
print(student)
print(repr(student))
print(student.__str__())


class Store:
    def __init__(self, name, items):
        self.name = name
        self.items = items
    def add_item(self, ime, cijena):
        artikl = { "name":ime,"price":cijena}
        self.items.append(artikl)
        return self.items
    def stock_price(self):
         zbroj = 0
         for item in self.items:
             zbroj += item["price"]
         return zbroj
    def __str__(self):
        return self.stock_price()
    
         
             
             
         
         
    
konzum = Store("Konzum", [{"name":"banana","price":25}])

print(konzum.name)      

konzum.add_item("jabuka", 33)
print(konzum.items)
print(konzum.__str__())


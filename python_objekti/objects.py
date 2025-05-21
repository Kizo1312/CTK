
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
        return f"Store: {self.name}, Items: {len(self.items)}, value: {self.stock_price()}"
    @staticmethod
    def franchise(store):
        store.name= f"Franchise-{store.name}"
        newStore = Store(store.name, store.items)
        return newStore
    @staticmethod
    def compare_value(store1, store2):
        if store1.stock_price() > store2.stock_price():
            return store1.name
        elif store2.stock_price() > store1.stock_price():
            return store2.name
        else:
            return "They are the same"
    @classmethod
    def from_year(cls, year, items):
        return cls(f"generated- {year}",items)
    @classmethod
    def from_item_list(cls,name, items_list):
        return cls(name,items_list)

    
        

    
    
         
             
             
         
         
    
konzum = Store("Konzum", [{"name":"banana","price":25}])
plodine = Store("Plodine",[{"name":"jabuka", "price":35}])
tommy = konzum.from_year(1996, konzum.items)
noviD= konzum.from_item_list(konzum.name, [{"name":"jabuka", "price": 26}])
print(noviD)

print(tommy)



print(konzum)
konzum.add_item("kiwi", 36)
print(konzum.stock_price())
print(Store.compare_value(konzum, plodine))
print(Store.franchise(konzum))
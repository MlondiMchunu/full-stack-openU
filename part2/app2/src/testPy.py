
def qs(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        great = [i for i in array[1:] if i > pivot]

        return qs(less) + [pivot] + qs(great)
    

print(qs([66,4,34,123,76,90,45,5,7,32,5]))
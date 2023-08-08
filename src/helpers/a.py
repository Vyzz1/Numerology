import math


def sumDigits(num):
    num = int(num)
    sum = 0
    while (num > 0):
        digits = num % 10
        sum += digits
        num //= 10
    return sum


def caculateRulingNumber(dateOfBirth):
    dateStr = dateOfBirth.split("/")
    sum = sumDigits(dateStr[0])+sumDigits(dateStr[1])+sumDigits(dateStr[2])
    if (sum == 22):
        return "22/4"
    elif (sum == 33):
        return "33/6"
    elif (sum > 12):
        sum = sumDigits(sum)

    return str(sum)


a = str(input("Enter a number "))
temp = a.split("/")
print()
print(caculateRulingNumber(a))

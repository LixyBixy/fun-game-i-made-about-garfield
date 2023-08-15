import random

# Set up the game
questions = {
    "What is always in front of you but can't be seen?": "future",
    "What has a head, a tail, but no body?": "coin",
    "What goes up but never comes down?": "age",
    "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?": "fire",
    "What starts with an E, ends with an E, but only contains one letter?": "envelope",
    "What gets wet drying?": "towel",
    "What starts with a P, ends with an E and has thousands of letters?": "post office",
    "There is one word spelled wrong in every English dictionary. What is it?": "wrong",
    "I make a loud sound when I’m changing. When I do change, I get bigger but weigh less. What am I?": "popcorn",
    "What kind of tree can you carry in your hand?": "palm"
}

hints = {
    "future": "It's what you're looking forward to.",
    "coin": "You use it to buy things.",
    "age": "It's a number.",
    "fire": "It's hot and dangerous.",
    "envelope": "You put letters in it.",
    "towel": "you use it almost everyday.",
    "post office": "mail man.",
    "wrong": "rhymes with song",
    "popcorn": "eat it while watching a movie",
    "palm": "hand"
}

lives = 3
score = 0

# Set up the story
print("Authors - LixyBixy
. Welcome to the Baba Breakout Room! You are Garfield, the lasagna-loving cat, and you're on a quest to earn enough baba coins to buy a lifetime supply of lasagna. You have 3 lives to answer 5 riddles worth 5 baba coins each. You can use a hint by typing Y if you get stuck, or skip a question for 10 baba coins by typing S.")

# Shuffle the questions
questions_list = list(questions.items())
random.shuffle(questions_list)

# Loop through the questions
for question, answer in questions_list:
    while True:
        print("\nQuestion:", question)
        guess = input("Your guess: ")
        
        if guess.lower() == answer:
            print("Correct!")
            score += 5
            break
        
        lives -= 1
        if lives == 0:
            print("Game over! You failed to earn enough baba coins for a lifetime supply of lasagna.")
            break
        
        if guess.lower() == "y":
            if score >= 5:
                score -= 5
                hint = hints.get(answer)
                if hint:
                    print(f"Hint: {hint}")
                    continue
            else:
                print("Sorry, you don't have enough baba coins to use a hint.")
                lives -= 1
        elif guess.lower() == "s":
            if score >= 10:
                score -= 10
                print("Skipping to the next question.")
                break
            else:
                print("Sorry, you don't have enough baba coins to skip this question.")
                lives -= 1
                break
        
        print("Incorrect!")
    
    if lives == 0:
        break
        
# Display the final score
print("\nFinal score:", score, "baba coins")

# Check if Garfield can buy a lifetime supply of lasagna
if score >= 25:
    print("Congratulations! You earned enough baba coins to buy a lifetime supply of lasagna!")
elif score >= 15:
    print("Good job! You earned enough baba coins to buy a year's worth of lasagna.")
else:
    print("Better luck next time, Garfield!")  

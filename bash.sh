variable=""
answer=""
while ($answer !== "exit") {
  read -p "Next Line" answer
  variable=variable+answer
}
read -p "What do you want to save this as?" name
variable > ($name)

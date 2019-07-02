# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quiz.create :name => "SAT english 1", :subject => "SAT", :id => 1
Quiz.create :name => "SAT english 2", :subject => "SAT", :id => 2
Quiz.create :name => "SAT math", :subject => "SAT", :id => 3

Quiz.create :name => "Series 7", :subject => "Series 7", :id => 4
Quiz.create :name => "Trivia", :subject => "Trivia", :id => 5

Question.create :description => "Choose a synonym of pretentious",
  :a => "austere",
  :b => "elated",
  :c => "ostentatious",
  :d => "ecstatic",
  :answer => "c",
  :quiz_id => 1

Question.create :description => "Choose a synonym of boring",
  :a => "spartan",
  :b => "jejune",
  :c => "tawdry",
  :d => "muted",
  :answer => "b",
  :quiz_id => 1

Question.create :description => "'Let us go fourth to lead the land we love.' What rhetorical figure is this an example of?",
  :a => "Simile",
  :b => "Metaphor",
  :c => "Personification",
  :d => "Alliteration",
  :answer => "d",
  :quiz_id => 1

Question.create :description => "The rabbit, introduced into Australia by English settlers, bred prolific and quickly became a pest, eating farmers grain and animal feed.",
  :a => "The rabbit",
  :b => "bred prolific",
  :c => "eating",
  :d => "No error",
  :answer => "b",
  :quiz_id => 1

Question.create :description => "The study shows that ___ dealings often do irreparable harm to a persons standing in the business community.",
  :a => "Scrupulous",
  :b => "Duplicitous",
  :c => "Prudent",
  :d => "Inconsequential",
  :answer => "b",
  :quiz_id => 1

Question.create :description=> "'his county is shining on a hill.' What rhetorical figure is this an example of?",
  :a => "Simile",
  :b => "Hyperbole",
  :c => "Metaphor",
  :d => "Personification",
  :answer => "c",
  :quiz_id => 2

Question.create :description=> 'A passage that contains the pronouns "I," "we," and "our" is using what point of view?',
  :a => "First person",
  :b => "Second person",
  :c => "Third person",
  :d => "Omniscient",
  :answer => "a",
  :quiz_id => 2

Question.create :description => "Tom's grandfather says that the surest way to spoil a child is to --- his or her every whim.",
  :a => "Indulge",
  :b => "Raise",
  :c => "Punish",
  :d => "Criticize",
  :answer => "a",
  :quiz_id => 2

Question.create :description => "Herbert Humphreys line, #{"I proudly and humbly accept your nomination."} is an example of what?",
  :a => "Pathos",
  :b => "Alliteration",
  :c => "Ethos",
  :d => "Paradox",
  :answer => "d",
  :quiz_id => 2

Question.create :description => 'Scholars ___ the theory, saying it is based more on wishful thinking than on solid evidence',
  :a => "Admired",
  :b => "Enter",
  :c => "Endorsed",
  :d => "Dismissed",
  :answer => "d",
  :quiz_id => 2

Question.create :description => 'Which of the following represents the statement “the sum of the squares of x and y is equal to the square root of the difference of x and y”?',
  :a => "x2 + y2 = √(x - y)",
  :b => "x2 − y2 = √(x + y)",
  :c => "(x + y)^2 = √x - √y",
  :d => "√(x + y) = (x − y)^2",
  :answer => "a",
  :quiz_id => 3

Question.create :description => 'If a = −2, then a + a^2 − a^3 + a^4 − a^5 =',
  :a => "-22",
  :b => "-18",
  :c => "32",
  :d => "58",
  :answer => "d",
  :quiz_id => 3

  Question.create :description => 'In the equation above, if a and b are positive integers and a/b is in its simplest reduced form, what is the value of a ?',
    :a => "2",
    :b => "9",
    :c => "18",
    :d => "40",
    :answer => "b",
    :quiz_id => 3

  Question.create :description => 'In a 28-student class, the ratio of boys to girls is 3:4. How many girls are there in the class?',
    :a => "4",
    :b => "6",
    :c => "12",
    :d => "16",
    :answer => "d",
    :quiz_id => 3

  Question.create :description => 'The ratio of Doras money to Lisas money is 7:5. If Dora has $24 more than Lisa, how much does Dora have?',
    :a => "$10",
    :b => "$14",
    :c => "$60",
    :d => "$84",
    :answer => "d",
    :quiz_id => 3

  Question.create :description => 'An uncle had established and contributed to a Coverdell ESA for his nephew’s college education for the last 10 years. The nephew withdraws $7,000 from the growth of the account to meet $5,000 worth of educational expenses. The remaining $2,000 is:',
    :a => "Taxable to the parents",
    :b => "Taxable to the uncle",
    :c => "Taxable to the nephew",
    :d => "Nontaxable to the nephew",
    :answer => "d",
    :quiz_id => 4

  Question.create :description => 'When comparing a broker-dealer and an investment advisor, which of these statements is most accurate?',
    :a => "Advisors are compensated based upon performance, brokers are not.",
    :b => "Advisors are compensated based upon transactions, brokers are compensated based upon assets under management.",
    :c => "Advisors are compensated based upon fees for advice, brokers are compensated based upon transactions.",
    :d => "Both are compensated based upon transactions.",
    :answer => "c",
    :quiz_id => 4

  Question.create :description => 'An agent of a broker-dealer may borrow money from all of the below except:',
    :a => 'a corporate affiliate of the agent’s member firm.',
    :b => "a client which is a bank.",
    :c => "a broker-dealer.",
    :d => "a mortgage broker.",
    :answer => "d",
    :quiz_id => 4

  Question.create :description => 'Mr. Watney has placed a buy order for 1000 shares of ABC at the market. The execution price was $42 in his cash account on Wednesday, February 4th. If he fails to make payment by Monday, February 9th, the most likely consequence will be:',
    :a => 'an extension of time will be requested on his behalf and if granted, no liquidation will occur.',
    :b => "no extension of time is necessary under these circumstances: he has two additional business days in which to make payment.",
    :c => "the purchase will be canceled for non-payment: his account will be frozen for 90 calendar days.",
    :d => "the firm will do a sell-out, at Mr. Watney’s expense, and freeze his account for 90 calendar days.",
    :answer => "b",
    :quiz_id => 4

  Question.create :description => 'The recommended way to handle a conflict of interest between a member firm and one of its customers in a proposed transaction or set of transactions is to:',
    :a => 'disclose the conflict of interest to the customer.',
    :b => "let the compliance and/or legal department handle the situation.",
    :c => "avoid the conflict – don’t propose transactions which involve conflicts of interest.",
    :d => "the member firm should obtain FINRA approval of the proposed transactions.",
    :answer => "a",
    :quiz_id => 4

  Question.create :description => "Gandalfs real name is",
    :a => "Olórin",
    :b => "Mithrandir",
    :c => "Father Christmas",
    :d => "Willie Robertson",
    :answer => "a",
    :quiz_id => 5

  Question.create :description => "What is Gokus saiyan name?",
    :a => "carrot cake",
    :b => "caccao",
    :c => "crate",
    :d => "kakarot",
    :answer => "d",
    :quiz_id => 5

  Question.create :description => "Jeff is allergic to?",
    :a => "shell fish", :b => "swimmy fish",
    :c => "cepholopods", :d => "sadness",
    :answer => "b",
    :quiz_id => 5

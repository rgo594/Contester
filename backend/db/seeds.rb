# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quiz.create :name => "SAT prep", :subject => "SAT", :id => 1
Quiz.create :name => "Series 7 prep", :subject => "Series 7", :id => 2


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

Question.create :description => "What is Gokus saiyan name?",
  :a => "carrot cake",
  :b => "caccao",
  :c => "crate",
  :d => "kakarot",
  :answer => "d",
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
  :quiz_id => 1

Question.create :description=> 'A passage that contains the pronouns "I," "we," and "our" is using what point of view?',
  :a => "First person",
  :b => "Second person",
  :c => "Third person",
  :d => "Omniscient",
  :answer => "a",
  :quiz_id => 1

Question.create :description => "Tom's grandfather says that the surest way to spoil a child is to --- his or her every whim.",
  :a => "Indulge",
  :b => "Raise",
  :c => "Punish",
  :d => "Criticize",
  :answer => "a",
  :quiz_id => 1

Question.create :description => "Herbert Humphreys line, #{"I proudly and humbly accept your nomination."} is an example of what?",
  :a => "Pathos",
  :b => "Alliteration",
  :c => "Ethos",
  :d => "Paradox",
  :answer => "d",
  :quiz_id => 1

Question.create :description => 'Scholars ___ the theory, saying it is based more on wishful thinking than on solid evidence',
  :a => "Admired",
  :b => "Enter",
  :c => "Endorsed",
  :d => "Dismissed",
  :answer => "d",
  :quiz_id => 1

Question.create :description => "Gandalfs real name is",
  :a => "Olórin",
  :b => "Mithrandir",
  :c => "Father Christmas",
  :d => "Willie Robertson",
  :answer => "a",
  :quiz_id => 2



Question.create :description => "Jeff is allergic to?", :a => "shell fish", :b => "swimmy fish", :c => "cepholopods", :d => "sadness", :answer => "b", :quiz_id => 2

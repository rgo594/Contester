# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create :username => "Rob", :password_digest => "123", :exam => "SAT", :test_date => "09-11-2019", :id => 1

Quiz.create :name => "SAT prep", :subject => "SAT", :id => 1
Quiz.create :name => "Series 7 prep", :subject => "Series 7", :id => 2

Question.create :description => "Choose a synonym of pretentious", :a => "austere", :b => "elated", :c => "ostentatious", :d => "ecstatic", :answer => "c", :quiz_id => 1
Question.create :description => "Choose a synonym of boring", :a => "spartan", :b => "jejune", :c => "tawdry", :d => "muted", :answer => "b", :quiz_id => 1
Question.create :description => "What is Gokus saiyan name?", :a => "carrot cake", :b => "caccao", :c => "crate", :d => "kakarot", :answer => "d", :quiz_id => 1

Question.create :description => "Gandalfs real name is", :a => "Olórin", :b => "Mithrandir", :c => "Father Christmas", :d => "Willie Robertson", :answer => "a", :quiz_id => 2
Question.create :description => "Jeff is allergic to?", :a => "shell fish", :b => "swimmy fish", :c => "cepholopods", :d => "sadness", :answer => "b", :quiz_id => 2

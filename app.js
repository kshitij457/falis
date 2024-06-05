var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@cluster0.vogbqw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        auth: {
          username: "admin",
          password: "admin"
        },
        useNewUrlParser:true,
        useUnifiedTopology: true
          }).then(
            () => { 
                console.log("MongoAtlas Database connected.");
            },
            err => { 
                /** handle initial connection error */ 
                console.log("Error in database connection. ", err);
            }
        );

var app =express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    project: String,
    subject: String,
    message: String,
});

var Contact = mongoose.model("Contact", contactSchema);



app.get("/",function(req, res){
     res.render("index.ejs");
})

app.get("/about", function(req, res){
    res.render("about.ejs");
});

app.get("/franchise", function(req, res){
    var data = [
        {
         "SNO": 1,
         "Brands": "Regus",
         "MODEL": "FoCO",
         "CATEGORY": "Co Working",
         "SUBCATEGORY": "Co Working",
         "SIZE": "5000 sq ft to 10000 sq ft",
         "INVESTMENT": "2.50 cr onwards",
         "EXPANSION": "Pan India",
        },
        {
         "SNO": 2,
         "Brands": "AR Jaipuria School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School \/ PRE SCHOOL",
         "SIZE": "2.5 Acres \/ Min. 3000 sqft\n",
         "INVESTMENT": "Initial investment Rs.8 -10 Cr.\/ Rs. 25 Lacs\n",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 3,
         "Brands": "Milleniium World School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "3 Acres",
         "INVESTMENT": "8 Cr.",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 4,
         "Brands": "Citi International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "2 Acres",
         "INVESTMENT": "2 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 5,
         "Brands": "Junior DPS",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K 5 School",
         "SIZE": "1000 Sq,Feet",
         "INVESTMENT": "15 Lacs",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 6,
         "Brands": "DY Patil International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "Mass Market -1.5 Acre \/ International School -1 Acre",
         "INVESTMENT": "8 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 7,
         "Brands": "Career Era",
         "CATEGORY": "Education",
         "SUBCATEGORY": "Online Coaching",
         "SIZE": "1000 Sq. Feet",
         "INVESTMENT": "30 Lakh",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 8,
         "Brands": "The Choclate Room",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft to 1500 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 9,
         "Brands": "Biggies Burger Café",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "38.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 10,
         "Brands": "Bigguy",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "32.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 11,
         "Brands": "Baithack",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Café",
         "SIZE": "500 sq ft",
         "INVESTMENT": "20.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 12,
         "Brands": "The Ghost Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Cloud Kitchen \/ QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 13,
         "Brands": "Shamby's Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "350 sq ft ",
         "INVESTMENT": "8.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 14,
         "Brands": "Bikanerwala",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 15,
         "Brands": "The Momo's Factory",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft onwards",
         "INVESTMENT": "14.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 16,
         "Brands": "Speak Burger",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft ",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "Only Metro's"
        },
        {
         "SNO": 17,
         "Brands": "Belgium Waffle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Tier 2\/3 "
        },
        {
         "SNO": 18,
         "Brands": "Frozen Bottle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 19,
         "Brands": "Ghoomar",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 20,
         "Brands": "Dakshin Bhog",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2000 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 21,
         "Brands": "Cheeliza",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "50.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 22,
         "Brands": "Sankalp",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Fien Dine",
         "SIZE": "1500 sq ft onwards",
         "INVESTMENT": "50.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 23,
         "Brands": "Snapdeal",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 24,
         "Brands": "Bata",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "40.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 25,
         "Brands": "Relaxo",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "400 sq ft",
         "INVESTMENT": "10.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 26,
         "Brands": "Suti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "600 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 27,
         "Brands": "Easybuy",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "5000 Sq. Ft",
         "INVESTMENT": "1.50 cr Onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 28,
         "Brands": "Me n Mom",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Kids wear\/care",
         "SIZE": "750 sq ft",
         "INVESTMENT": "35.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 29,
         "Brands": "BIBA \/ Rangriti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "700 sq ft",
         "INVESTMENT": "22.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 30,
         "Brands": "Croma",
         "MODEL": "FOCO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Electronics",
         "SIZE": "8000 sq ft",
         "INVESTMENT": "4.50 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 31,
         "Brands": "Osia Hypermart",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Hypermart",
         "SIZE": "20000 sq ft",
         "INVESTMENT": "9.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 32,
         "Brands": "Frelit",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Solar Solutions",
         "SIZE": "250 sq ft ",
         "INVESTMENT": "12.00 lk onwards",
         "EXPANSION": "MP"
        },
        {
         "SNO": 33,
         "Brands": "Rocking Deals",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Discount store",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 34,
         "Brands": "Sugandhlok",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Agarbatti ",
         "SIZE": "400 sq ft",
         "INVESTMENT": "20.00lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 35,
         "Brands": "Jockey",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Acessories",
         "SIZE": "750 sq ft",
         "INVESTMENT": "60.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 36,
         "Brands": "Chique",
         "MODEL": "FOFO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "30 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 37,
         "Brands": "Farzi Café",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 38,
         "Brands": "Papaya",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 39,
         "Brands": "Oven Story",
         "MODEL": "Food Court",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 40,
         "Brands": "Pantaloon",
         "MODEL": "Lease",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "10000 sq ft onwards",
         "INVESTMENT": "2.00 cr onwards",
         "EXPANSION": "India"
        }
       ]
    res.render("franchise.ejs", {data: data});
});

app.get("/service",function(req,res){
    res.render("service.ejs")
});

app.get("/test", function(req,res){
    var data = [
        {
         "SNO": 1,
         "Brands": "Regus",
         "MODEL": "FoCO",
         "CATEGORY": "Co Working",
         "SUBCATEGORY": "Co Working",
         "SIZE": "5000 sq ft to 10000 sq ft",
         "INVESTMENT": "2.50 cr onwards",
         "EXPANSION": "Pan India",
        },
        {
         "SNO": 2,
         "Brands": "AR Jaipuria School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School \/ PRE SCHOOL",
         "SIZE": "2.5 Acres \/ Min. 3000 sqft\n",
         "INVESTMENT": "Initial investment Rs.8 -10 Cr.\/ Rs. 25 Lacs\n",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 3,
         "Brands": "Milleniium World School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "3 Acres",
         "INVESTMENT": "8 Cr.",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 4,
         "Brands": "Citi International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "2 Acres",
         "INVESTMENT": "2 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 5,
         "Brands": "Junior DPS",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K 5 School",
         "SIZE": "1000 Sq,Feet",
         "INVESTMENT": "15 Lacs",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 6,
         "Brands": "DY Patil International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "Mass Market -1.5 Acre \/ International School -1 Acre",
         "INVESTMENT": "8 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 7,
         "Brands": "Career Era",
         "CATEGORY": "Education",
         "SUBCATEGORY": "Online Coaching",
         "SIZE": "1000 Sq. Feet",
         "INVESTMENT": "30 Lakh",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 8,
         "Brands": "The Choclate Room",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft to 1500 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 9,
         "Brands": "Biggies Burger Café",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "38.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 10,
         "Brands": "Bigguy",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "32.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 11,
         "Brands": "Baithack",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Café",
         "SIZE": "500 sq ft",
         "INVESTMENT": "20.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 12,
         "Brands": "The Ghost Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Cloud Kitchen \/ QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 13,
         "Brands": "Shamby's Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "350 sq ft ",
         "INVESTMENT": "8.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 14,
         "Brands": "Bikanerwala",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 15,
         "Brands": "The Momo's Factory",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft onwards",
         "INVESTMENT": "14.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 16,
         "Brands": "Speak Burger",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft ",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "Only Metro's"
        },
        {
         "SNO": 17,
         "Brands": "Belgium Waffle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Tier 2\/3 "
        },
        {
         "SNO": 18,
         "Brands": "Frozen Bottle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 19,
         "Brands": "Ghoomar",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 20,
         "Brands": "Dakshin Bhog",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2000 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 21,
         "Brands": "Cheeliza",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "50.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 22,
         "Brands": "Sankalp",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Fien Dine",
         "SIZE": "1500 sq ft onwards",
         "INVESTMENT": "50.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 23,
         "Brands": "Snapdeal",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 24,
         "Brands": "Bata",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "40.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 25,
         "Brands": "Relaxo",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "400 sq ft",
         "INVESTMENT": "10.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 26,
         "Brands": "Suti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "600 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 27,
         "Brands": "Easybuy",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "5000 Sq. Ft",
         "INVESTMENT": "1.50 cr Onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 28,
         "Brands": "Me n Mom",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Kids wear\/care",
         "SIZE": "750 sq ft",
         "INVESTMENT": "35.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 29,
         "Brands": "BIBA \/ Rangriti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "700 sq ft",
         "INVESTMENT": "22.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 30,
         "Brands": "Croma",
         "MODEL": "FOCO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Electronics",
         "SIZE": "8000 sq ft",
         "INVESTMENT": "4.50 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 31,
         "Brands": "Osia Hypermart",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Hypermart",
         "SIZE": "20000 sq ft",
         "INVESTMENT": "9.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 32,
         "Brands": "Frelit",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Solar Solutions",
         "SIZE": "250 sq ft ",
         "INVESTMENT": "12.00 lk onwards",
         "EXPANSION": "MP"
        },
        {
         "SNO": 33,
         "Brands": "Rocking Deals",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Discount store",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 34,
         "Brands": "Sugandhlok",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Agarbatti ",
         "SIZE": "400 sq ft",
         "INVESTMENT": "20.00lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 35,
         "Brands": "Jockey",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Acessories",
         "SIZE": "750 sq ft",
         "INVESTMENT": "60.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 36,
         "Brands": "Chique",
         "MODEL": "FOFO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "30 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 37,
         "Brands": "Farzi Café",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 38,
         "Brands": "Papaya",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 39,
         "Brands": "Oven Story",
         "MODEL": "Food Court",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 40,
         "Brands": "Pantaloon",
         "MODEL": "Lease",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "10000 sq ft onwards",
         "INVESTMENT": "2.00 cr onwards",
         "EXPANSION": "India"
        }
       ]

        res.render("test.ejs", {data: data})
});

app.get("/contact",function(req,res){
    res.render("contact.ejs")
})

app.post("/add-contact", async function(req, res){
    var body = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        project: req.body.project,
        subject: req.body.subject,
        message: req.body.message
    }

    Contact.create(body).then(function(){
        res.redirect("/");
    }).catch(function(error){
        res.send(error);
    })
});

app.get("/getContacts", async function(req, res){

    var response = await Contact.find({});

    res.render("contactresponse.ejs",{contacts: response});
});

app.post("/search", function(req, res){
    var data = [
        {
         "SNO": 1,
         "Brands": "Regus",
         "MODEL": "FoCO",
         "CATEGORY": "Co Working",
         "SUBCATEGORY": "Co Working",
         "SIZE": "5000 sq ft to 10000 sq ft",
         "INVESTMENT": "2.50 cr onwards",
         "EXPANSION": "Pan India",
        },
        {
         "SNO": 2,
         "Brands": "AR Jaipuria School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School \/ PRE SCHOOL",
         "SIZE": "2.5 Acres \/ Min. 3000 sqft\n",
         "INVESTMENT": "Initial investment Rs.8 -10 Cr.\/ Rs. 25 Lacs\n",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 3,
         "Brands": "Milleniium World School",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "3 Acres",
         "INVESTMENT": "8 Cr.",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 4,
         "Brands": "Citi International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "2 Acres",
         "INVESTMENT": "2 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 5,
         "Brands": "Junior DPS",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K 5 School",
         "SIZE": "1000 Sq,Feet",
         "INVESTMENT": "15 Lacs",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 6,
         "Brands": "DY Patil International School ",
         "CATEGORY": "Education",
         "SUBCATEGORY": "K12 School",
         "SIZE": "Mass Market -1.5 Acre \/ International School -1 Acre",
         "INVESTMENT": "8 Cr",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 7,
         "Brands": "Career Era",
         "CATEGORY": "Education",
         "SUBCATEGORY": "Online Coaching",
         "SIZE": "1000 Sq. Feet",
         "INVESTMENT": "30 Lakh",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 8,
         "Brands": "The Choclate Room",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft to 1500 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 9,
         "Brands": "Biggies Burger Café",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "38.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 10,
         "Brands": "Bigguy",
         "MODEL": "Fofo\/Foco",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "32.00 lk onwards",
         "EXPANSION": "Pan India (except UP)"
        },
        {
         "SNO": 11,
         "Brands": "Baithack",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Café",
         "SIZE": "500 sq ft",
         "INVESTMENT": "20.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 12,
         "Brands": "The Ghost Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Cloud Kitchen \/ QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 13,
         "Brands": "Shamby's Kitchen",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "350 sq ft ",
         "INVESTMENT": "8.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 14,
         "Brands": "Bikanerwala",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 15,
         "Brands": "The Momo's Factory",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft onwards",
         "INVESTMENT": "14.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 16,
         "Brands": "Speak Burger",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft ",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "Only Metro's"
        },
        {
         "SNO": 17,
         "Brands": "Belgium Waffle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Tier 2\/3 "
        },
        {
         "SNO": 18,
         "Brands": "Frozen Bottle",
         "MODEL": "Fofo",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 19,
         "Brands": "Ghoomar",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2500 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 20,
         "Brands": "Dakshin Bhog",
         "MODEL": "FOCO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Dinning",
         "SIZE": "2000 sq ft",
         "INVESTMENT": "1.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 21,
         "Brands": "Cheeliza",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "500 sq ft",
         "INVESTMENT": "50.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 22,
         "Brands": "Sankalp",
         "MODEL": "FOFO",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "Fien Dine",
         "SIZE": "1500 sq ft onwards",
         "INVESTMENT": "50.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 23,
         "Brands": "Snapdeal",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "500 sq ft ",
         "INVESTMENT": "18.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 24,
         "Brands": "Bata",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "40.00 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 25,
         "Brands": "Relaxo",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Footwear Retail",
         "SIZE": "400 sq ft",
         "INVESTMENT": "10.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 26,
         "Brands": "Suti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "600 sq ft",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 27,
         "Brands": "Easybuy",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "5000 Sq. Ft",
         "INVESTMENT": "1.50 cr Onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 28,
         "Brands": "Me n Mom",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Kids wear\/care",
         "SIZE": "750 sq ft",
         "INVESTMENT": "35.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 29,
         "Brands": "BIBA \/ Rangriti",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "700 sq ft",
         "INVESTMENT": "22.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 30,
         "Brands": "Croma",
         "MODEL": "FOCO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Electronics",
         "SIZE": "8000 sq ft",
         "INVESTMENT": "4.50 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 31,
         "Brands": "Osia Hypermart",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Hypermart",
         "SIZE": "20000 sq ft",
         "INVESTMENT": "9.00 cr onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 32,
         "Brands": "Frelit",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Solar Solutions",
         "SIZE": "250 sq ft ",
         "INVESTMENT": "12.00 lk onwards",
         "EXPANSION": "MP"
        },
        {
         "SNO": 33,
         "Brands": "Rocking Deals",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Discount store",
         "INVESTMENT": "30.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 34,
         "Brands": "Sugandhlok",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Agarbatti ",
         "SIZE": "400 sq ft",
         "INVESTMENT": "20.00lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 35,
         "Brands": "Jockey",
         "MODEL": "Fofo",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Acessories",
         "SIZE": "750 sq ft",
         "INVESTMENT": "60.00 lk onwards",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 36,
         "Brands": "Chique",
         "MODEL": "FOFO",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "1000 sq ft",
         "INVESTMENT": "30 lk",
         "EXPANSION": "Pan India"
        },
        {
         "SNO": 37,
         "Brands": "Farzi Café",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 38,
         "Brands": "Papaya",
         "MODEL": "Franchise",
         "CATEGORY": "Fine Dine\/ Café",
         "SUBCATEGORY": "Fine Dine\/ Café",
         "SIZE": "3000 sq ft onwards",
         "INVESTMENT": "3.00 cr onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 39,
         "Brands": "Oven Story",
         "MODEL": "Food Court",
         "CATEGORY": "Food & Beverage",
         "SUBCATEGORY": "QSR",
         "SIZE": "700 sq ft",
         "INVESTMENT": "45.00 lk onwards",
         "EXPANSION": "India"
        },
        {
         "SNO": 40,
         "Brands": "Pantaloon",
         "MODEL": "Lease",
         "CATEGORY": "Retail",
         "SUBCATEGORY": "Apparels",
         "SIZE": "10000 sq ft onwards",
         "INVESTMENT": "2.00 cr onwards",
         "EXPANSION": "India"
        }
       ]

    res.render("search.ejs", {data: data, input: req.body.input});
    
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Falis server running on port: " + process.env.PORT)
})
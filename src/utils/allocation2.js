const students = [
    {
        "Name": "Mit Chtrola ",
        "Enrollment Number": 2001701071001,
        "ACPC Rank": 1720,
        "Adhar Number": 242832365578,
        "Gender ": "Male",
        "Cast ": "Open ",
        "Branch ": "Information Technology",
        "Distance": 101
    },
    {
        "Name": "Dhrumil Ponkiya ",
        "Enrollment Number": 2001701071002,
        "ACPC Rank": 8000,
        "Adhar Number": 242832365579,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Civil Engineering",
        "Distance": 134
    },
    {
        "Name": "Bhruvil Bhojani ",
        "Enrollment Number": 2001701071003,
        "ACPC Rank": 1500,
        "Adhar Number": 242832365580,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Civil Engineering",
        "Distance": 167
    },
    {
        "Name": "Jenil Kheni ",
        "Enrollment Number": 2001701071004,
        "ACPC Rank": 6000,
        "Adhar Number": 242832365581,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electrical Engineering",
        "Distance": 200
    },
    {
        "Name": "Maynak Patel ",
        "Enrollment Number": 2001701071005,
        "ACPC Rank": 6560,
        "Adhar Number": 242832365582,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 233
    },
    {
        "Name": "Harshit Patidar",
        "Enrollment Number": 2001701071006,
        "ACPC Rank": 14000,
        "Adhar Number": 242832365583,
        "Gender ": "Male ",
        "Cast ": "General",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 266
    },
    {
        "Name": "Jeel Patidar ",
        "Enrollment Number": 2001701071007,
        "ACPC Rank": 16900,
        "Adhar Number": 242832365584,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Mechanical Engineering",
        "Distance": 299
    },
    {
        "Name": "Sanjya  Cahuhan ",
        "Enrollment Number": 2001701071008,
        "ACPC Rank": 12240,
        "Adhar Number": 242832365585,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Power Electronics Engineering",
        "Distance": 332
    },
    {
        "Name": "Suryakumar  Patidar",
        "Enrollment Number": 2001701071009,
        "ACPC Rank": 1600,
        "Adhar Number": 242832365586,
        "Gender ": "Male",
        "Cast ": "ST",
        "Branch ": "Computer Science and Engineering",
        "Distance": 365
    },
    {
        "Name": "Saniya Chaudhari ",
        "Enrollment Number": 2001701071010,
        "ACPC Rank": 18000,
        "Adhar Number": 242832365587,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 398
    },
    {
        "Name": "Anjali Parmar ",
        "Enrollment Number": 2001701071011,
        "ACPC Rank": 1800,
        "Adhar Number": 242832365588,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Information Technology",
        "Distance": 431
    },
    {
        "Name": "Zoya Baria",
        "Enrollment Number": 2001701071012,
        "ACPC Rank": 8024,
        "Adhar Number": 242832365589,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Chemical Engineering",
        "Distance": 111
    },
    {
        "Name": "Sneha Mittal",
        "Enrollment Number": 2001701071013,
        "ACPC Rank": 870,
        "Adhar Number": 242832365590,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Computer Engineering",
        "Distance": 122
    },
    {
        "Name": "Abhi Pandey",
        "Enrollment Number": 2001701071014,
        "ACPC Rank": 6022,
        "Adhar Number": 242832365591,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electrical Engineering",
        "Distance": 133
    },
    {
        "Name": "Gopal Holkar",
        "Enrollment Number": 2001701071015,
        "ACPC Rank": 8022,
        "Adhar Number": 242832365592,
        "Gender ": "Male",
        "Cast ": "St",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 144
    },
    {
        "Name": "Daksh Mandalik",
        "Enrollment Number": 2001701071016,
        "ACPC Rank": 9022,
        "Adhar Number": 242832365593,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 155
    },
    {
        "Name": "Anushree Bajpai",
        "Enrollment Number": 2001701071017,
        "ACPC Rank": 12222,
        "Adhar Number": 242832365594,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Mechanical Engineering",
        "Distance": 166
    },
    {
        "Name": "Anu Heravdakar",
        "Enrollment Number": 2001701071018,
        "ACPC Rank": 7822,
        "Adhar Number": 242832365595,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Power Electronics Engineering",
        "Distance": 177
    },
    {
        "Name": "Ami Dapre",
        "Enrollment Number": 2001701071019,
        "ACPC Rank": 1022,
        "Adhar Number": 242832365596,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Computer Science and Engineering",
        "Distance": 188
    },
    {
        "Name": "Priyanshi Malviya",
        "Enrollment Number": 2001701071020,
        "ACPC Rank": 8024,
        "Adhar Number": 242832365597,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 199
    },
    {
        "Name": "Divya Jagatap",
        "Enrollment Number": 2001701071021,
        "ACPC Rank": 12032,
        "Adhar Number": 242832365598,
        "Gender ": "Female",
        "Cast ": "ST",
        "Branch ": "Electrical Engineering",
        "Distance": 210
    },
    {
        "Name": "Kriti Trivedi",
        "Enrollment Number": 2001701071022,
        "ACPC Rank": 6024,
        "Adhar Number": 242832365599,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Electrical Engineering",
        "Distance": 221
    },
    {
        "Name": "Karna Rathod",
        "Enrollment Number": 2001701071023,
        "ACPC Rank": 924,
        "Adhar Number": 242832365600,
        "Gender ": "Male",
        "Cast ": "ST",
        "Branch ": "Computer Engineering",
        "Distance": 232
    },
    {
        "Name": "Sumit Chetti",
        "Enrollment Number": 2001701071024,
        "ACPC Rank": 1539,
        "Adhar Number": 242832365601,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Information Technology",
        "Distance": 243
    },
    {
        "Name": "Madhava Munshi",
        "Enrollment Number": 2001701071025,
        "ACPC Rank": 14039,
        "Adhar Number": 242832365602,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Chemical Engineering",
        "Distance": 254
    },
    {
        "Name": "Peeyush Bhavalakar",
        "Enrollment Number": 2001701071026,
        "ACPC Rank": 1400,
        "Adhar Number": 242832365603,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Computer Engineering",
        "Distance": 265
    },
    {
        "Name": "Aman Mukhtar",
        "Enrollment Number": 2001701071027,
        "ACPC Rank": 12001,
        "Adhar Number": 242832365604,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electrical Engineering",
        "Distance": 276
    },
    {
        "Name": "Benegal Dhebar",
        "Enrollment Number": 2001701071028,
        "ACPC Rank": 6700,
        "Adhar Number": 242832365605,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 287
    },
    {
        "Name": "Dhule Dhavale",
        "Enrollment Number": 2001701071029,
        "ACPC Rank": 8700,
        "Adhar Number": 242832365606,
        "Gender ": "Male ",
        "Cast ": "General",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 298
    },
    {
        "Name": "Asvalayana Bhave",
        "Enrollment Number": 2001701071030,
        "ACPC Rank": 15001,
        "Adhar Number": 242832365607,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Mechanical Engineering",
        "Distance": 309
    },
    {
        "Name": "Chettur Bandyopadhyay",
        "Enrollment Number": 2001701071031,
        "ACPC Rank": 80001,
        "Adhar Number": 242832365608,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Power Electronics Engineering",
        "Distance": 320
    },
    {
        "Name": "Sooraj Khamavant",
        "Enrollment Number": 2001701071032,
        "ACPC Rank": 24001,
        "Adhar Number": 242832365609,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Computer Science and Engineering",
        "Distance": 331
    },
    {
        "Name": "Yad Upadhyay",
        "Enrollment Number": 2001701071033,
        "ACPC Rank": 12301,
        "Adhar Number": 242832365610,
        "Gender ": "Male",
        "Cast ": "General",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 342
    },
    {
        "Name": "Vishnu Padhya",
        "Enrollment Number": 2001701071034,
        "ACPC Rank": 2539,
        "Adhar Number": 242832365611,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Information Technology",
        "Distance": 353
    },
    {
        "Name": "Rahul Talavalakar",
        "Enrollment Number": 2001701071035,
        "ACPC Rank": 24039,
        "Adhar Number": 242832365612,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Chemical Engineering",
        "Distance": 364
    },
    {
        "Name": "Viswamitra Sarkar",
        "Enrollment Number": 2001701071036,
        "ACPC Rank": 2400,
        "Adhar Number": 242832365613,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Computer Engineering",
        "Distance": 375
    },
    {
        "Name": "Aakash Talavalakar",
        "Enrollment Number": 2001701071037,
        "ACPC Rank": 13001,
        "Adhar Number": 242832365614,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Electrical Engineering",
        "Distance": 386
    },
    {
        "Name": "Prashant Joshi",
        "Enrollment Number": 2001701071038,
        "ACPC Rank": 7700,
        "Adhar Number": 242832365615,
        "Gender ": "Male ",
        "Cast ": "OBC",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 397
    },
    {
        "Name": "Dhirtarashtra Kashyap",
        "Enrollment Number": 2001701071039,
        "ACPC Rank": 9700,
        "Adhar Number": 242832365616,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 408
    },
    {
        "Name": "Jagadis Parekh",
        "Enrollment Number": 2001701071040,
        "ACPC Rank": 16001,
        "Adhar Number": 242832365617,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Mechanical Engineering",
        "Distance": 419
    },
    {
        "Name": "Aryabhata Kusari",
        "Enrollment Number": 2001701071041,
        "ACPC Rank": 90001,
        "Adhar Number": 242832365618,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Power Electronics Engineering",
        "Distance": 430
    },
    {
        "Name": "Prashant Gupta",
        "Enrollment Number": 2001701071042,
        "ACPC Rank": 25001,
        "Adhar Number": 242832365619,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Computer Science and Engineering",
        "Distance": 441
    },
    {
        "Name": "Hala Thakore",
        "Enrollment Number": 2001701071043,
        "ACPC Rank": 14301,
        "Adhar Number": 242832365620,
        "Gender ": "Male",
        "Cast ": "OBC",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 452
    },
    {
        "Name": "Gopal Panikkar",
        "Enrollment Number": 2001701071044,
        "ACPC Rank": 5539,
        "Adhar Number": 242832365621,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Computer Science and Engineering",
        "Distance": 463
    },
    {
        "Name": "Kahoda Upasani",
        "Enrollment Number": 2001701071045,
        "ACPC Rank": 27039,
        "Adhar Number": 242832365622,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 474
    },
    {
        "Name": "Ajatasatru Shrivastav",
        "Enrollment Number": 2001701071046,
        "ACPC Rank": 4401,
        "Adhar Number": 242832365623,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Information Technology",
        "Distance": 485
    },
    {
        "Name": "Din Pavagi",
        "Enrollment Number": 2001701071047,
        "ACPC Rank": 18002,
        "Adhar Number": 242832365624,
        "Gender ": "Male ",
        "Cast ": "SC",
        "Branch ": "Chemical Engineering",
        "Distance": 496
    },
    {
        "Name": "Venkata Shrivastav",
        "Enrollment Number": 2001701071048,
        "ACPC Rank": 97002,
        "Adhar Number": 242832365625,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Computer Engineering",
        "Distance": 507
    },
    {
        "Name": "Asha Mandalik",
        "Enrollment Number": 2001701071049,
        "ACPC Rank": 10702,
        "Adhar Number": 242832365626,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Electrical Engineering",
        "Distance": 518
    },
    {
        "Name": "Dheeraj Malhotra",
        "Enrollment Number": 2001701071050,
        "ACPC Rank": 19002,
        "Adhar Number": 242832365627,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 165
    },
    {
        "Name": "Chandrama Singh",
        "Enrollment Number": 2001701071051,
        "ACPC Rank": 95002,
        "Adhar Number": 242832365628,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 168
    },
    {
        "Name": "Viswamitra Kamath",
        "Enrollment Number": 2001701071052,
        "ACPC Rank": 28002,
        "Adhar Number": 242832365629,
        "Gender ": "Male",
        "Cast ": "SC",
        "Branch ": "Mechanical Engineering",
        "Distance": 171
    },
    {
        "Name": "Vijaya Seth",
        "Enrollment Number": 2001701071053,
        "ACPC Rank": 18302,
        "Adhar Number": 242832365630,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Information Technology",
        "Distance": 174
    },
    {
        "Name": "Aasiya Acharekar",
        "Enrollment Number": 2001701071054,
        "ACPC Rank": 1724,
        "Adhar Number": 242832365631,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Chemical Engineering",
        "Distance": 177
    },
    {
        "Name": "Palak Adhya",
        "Enrollment Number": 2001701071055,
        "ACPC Rank": 8004,
        "Adhar Number": 242832365632,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Computer Engineering",
        "Distance": 180
    },
    {
        "Name": "Anushree Padhya",
        "Enrollment Number": 2001701071056,
        "ACPC Rank": 1504,
        "Adhar Number": 242832365633,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Electrical Engineering",
        "Distance": 183
    },
    {
        "Name": "Alia Shrivastava",
        "Enrollment Number": 2001701071057,
        "ACPC Rank": 6004,
        "Adhar Number": 242832365634,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 186
    },
    {
        "Name": "Kavuri Ranganekary",
        "Enrollment Number": 2001701071058,
        "ACPC Rank": 6564,
        "Adhar Number": 242832365635,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 189
    },
    {
        "Name": "Indira Lata",
        "Enrollment Number": 2001701071059,
        "ACPC Rank": 14004,
        "Adhar Number": 242832365636,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Mechanical Engineering",
        "Distance": 192
    },
    {
        "Name": "Cheeno Haldar",
        "Enrollment Number": 2001701071060,
        "ACPC Rank": 16904,
        "Adhar Number": 242832365637,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Power Electronics Engineering",
        "Distance": 195
    },
    {
        "Name": "Sadhana Pande",
        "Enrollment Number": 2001701071061,
        "ACPC Rank": 12244,
        "Adhar Number": 242832365638,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Computer Science and Engineering",
        "Distance": 198
    },
    {
        "Name": "Karnavati Kapil",
        "Enrollment Number": 2001701071062,
        "ACPC Rank": 1604,
        "Adhar Number": 242832365639,
        "Gender ": "Female",
        "Cast ": "General",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 201
    },
    {
        "Name": "Kamala Dayal",
        "Enrollment Number": 2001701071063,
        "ACPC Rank": 18004,
        "Adhar Number": 242832365640,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Information Technology",
        "Distance": 204
    },
    {
        "Name": "Snigdha Mehrotra",
        "Enrollment Number": 2001701071064,
        "ACPC Rank": 80004,
        "Adhar Number": 242832365641,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Chemical Engineering",
        "Distance": 207
    },
    {
        "Name": "Snigdha Acharekar",
        "Enrollment Number": 2001701071065,
        "ACPC Rank": 1804,
        "Adhar Number": 242832365642,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Computer Engineering",
        "Distance": 210
    },
    {
        "Name": "Nagini Valimbe",
        "Enrollment Number": 2001701071066,
        "ACPC Rank": 1505,
        "Adhar Number": 242832365643,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Electrical Engineering",
        "Distance": 213
    },
    {
        "Name": "Jaya Sharma",
        "Enrollment Number": 2001701071067,
        "ACPC Rank": 6005,
        "Adhar Number": 242832365644,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 216
    },
    {
        "Name": "Sambridhi Shiravadakar",
        "Enrollment Number": 2001701071068,
        "ACPC Rank": 6565,
        "Adhar Number": 242832365645,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 219
    },
    {
        "Name": "Minu Munshif",
        "Enrollment Number": 2001701071069,
        "ACPC Rank": 14005,
        "Adhar Number": 242832365646,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Mechanical Engineering",
        "Distance": 222
    },
    {
        "Name": "Kasturbai Shrivastav",
        "Enrollment Number": 2001701071070,
        "ACPC Rank": 16905,
        "Adhar Number": 242832365647,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Power Electronics Engineering",
        "Distance": 225
    },
    {
        "Name": "Shalini Raj",
        "Enrollment Number": 2001701071071,
        "ACPC Rank": 12245,
        "Adhar Number": 242832365648,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Computer Science and Engineering",
        "Distance": 228
    },
    {
        "Name": "Sulini Sardar",
        "Enrollment Number": 2001701071072,
        "ACPC Rank": 1605,
        "Adhar Number": 242832365649,
        "Gender ": "Female",
        "Cast ": "OBC",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 231
    },
    {
        "Name": "Surya Ganapuli",
        "Enrollment Number": 2001701071073,
        "ACPC Rank": 18005,
        "Adhar Number": 242832365650,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Information Technology",
        "Distance": 234
    },
    {
        "Name": "Kanak Gayakvad",
        "Enrollment Number": 2001701071074,
        "ACPC Rank": 80005,
        "Adhar Number": 242832365651,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Chemical Engineering",
        "Distance": 237
    },
    {
        "Name": "Shakti Thakur",
        "Enrollment Number": 2001701071075,
        "ACPC Rank": 1805,
        "Adhar Number": 242832365652,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Computer Engineering",
        "Distance": 240
    },
    {
        "Name": "Nutan Phadanis",
        "Enrollment Number": 2001701071076,
        "ACPC Rank": 10024,
        "Adhar Number": 242832365653,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Electrical Engineering",
        "Distance": 243
    },
    {
        "Name": "Kumari Valimbe",
        "Enrollment Number": 2001701071077,
        "ACPC Rank": 8024,
        "Adhar Number": 242832365654,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Electronics & Communication Engineering",
        "Distance": 246
    },
    {
        "Name": "Vijaya Nayar",
        "Enrollment Number": 2001701071078,
        "ACPC Rank": 9091,
        "Adhar Number": 242832365655,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Instrumentation & Control Engineering",
        "Distance": 249
    },
    {
        "Name": "Shinu Nancy",
        "Enrollment Number": 2001701071079,
        "ACPC Rank": 12092,
        "Adhar Number": 242832365656,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Mechanical Engineering",
        "Distance": 252
    },
    {
        "Name": "Cheeno Dayal",
        "Enrollment Number": 2001701071080,
        "ACPC Rank": 8993,
        "Adhar Number": 242832365657,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Power Electronics Engineering",
        "Distance": 255
    },
    {
        "Name": "Nutan Chadda",
        "Enrollment Number": 2001701071081,
        "ACPC Rank": 723,
        "Adhar Number": 242832365658,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Computer Science and Engineering",
        "Distance": 258
    },
    {
        "Name": "Aahana Goyal",
        "Enrollment Number": 2001701071082,
        "ACPC Rank": 6701,
        "Adhar Number": 242832365659,
        "Gender ": "Female",
        "Cast ": "SC",
        "Branch ": "Electronics And Instrumentation Engineering",
        "Distance": 261
    }
]
const castes = [
    {
        caste: "SC",
        quota: 7
    },
    {
        caste: "ST",
        quota: 15
    },
    {
        caste: "SEBC",
        quota: 27
    },
    {
        caste: "EWS",
        quota: 10
    },
]
let branches = [
    {
        name: 'Computer Engineering',
        ratio: 2
    },
    {
        name: 'Computer Science and Engineering',
        ratio: 1
    },
    {
        name: 'Information Technology',
        ratio: 1
    },
    {
        name: 'Electronics & Communication Engineering',
        ratio: 2
    },
    {
        name: 'Mechanical Engineering',
        ratio: 2
    },
    {
        name: 'Chemical Engineering',
        ratio: 1
    },
    {
        name: 'Electrical Engineering',
        ratio: 2
    },
    {
        name: 'Civil Enginnering',
        ratio: 1
    },

]
let intake = [2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1]

const getstats = (seats, castes) => {
    const casteQuota = castes.map((caste) => {
        let noSeats = Math.floor((caste.quota * seats) / 100);
        return { ...caste, quotaSeats: noSeats }
    })
    // console.log(casteQuota);
    return casteQuota;
}
const getstatsByBranches = (seats, branches) => {
    let totalSeats = 0;
    branches.forEach(element => {
        totalSeats += element.ratio;
    });
    // console.log(totalSeats);
    const branchQuota = branches.map((branch) => {
        let noSeats = Math.floor((branch.ratio * seats) / totalSeats);
        return { ...branch, seatSelected: noSeats }
    })
    //console.log(branchQuota);
    return branchQuota;

}

const branchCasteQuotaDivision = (branchesQuota, caste) => {
    //  console.log("branchesQuota",branchesQuota);
    const eachGet = Math.floor(caste.quotaSeats / branchesQuota.length);
    const c = caste.caste;
    const remaining = caste.quotaSeats % branchesQuota.length;
    let newBranchQuota = branchesQuota;
    if (caste.quotaSeats > branchesQuota.length) {
        branchesQuota = branchesQuota.map((branch) => {
            // console.log(branch.seatSelected)
            branch[c] = eachGet;
            return { ...branch, [c]: eachGet };
        });
    }

    for (let i = 0; i < remaining; i++) {
        if (branchesQuota[i][c]) branchesQuota[i][c]++;
        else branchesQuota[i][c] = 1;
    }

    return branchesQuota;

}

const handleMain = () => {
    const cs = getstats(30, castes);
    let br = getstatsByBranches(30, branches);
      console.log(br)
     console.log(cs)

    cs.forEach(element => {
        br = branchCasteQuotaDivision(br, element);
    });
     console.log(br);
     return br;
}
handleMain();


function len_compare(a, b) {
    return a["ACPC Rank"] - b["ACPC Rank"];
}




const sortStudentsFrombranch = (branchData) => {
    console.log(branchData);
    const selectedStudents = [];
    var rem = branchData.seatSelected - (branchData.SC + branchData.ST + branchData.SEBC + branchData.SEBC);

    students.forEach(element => {
            if(branchData["Branch "] == element["Branch  "]){
                if(branchData[element["Cast "]] > 0){
                    console.log("allocated", element);
                    element.select=true;
                    branchData[element["Cast "]]--;
                }
            }
    });
    if(rem > 0){

    students.forEach(element => {
            if(branchData["Branch "] == element["Branch  "]){
                if(rem > 0 && element.select){
                    console.log("allocated", element);
                    rem--;
                }
            }
    });
}







}


const handleMainMain = () => {

    students.sort(len_compare);
    students.forEach(element => {
        //console.log(element["ACPC Rank"]);
    });
  //  console.log(students.length)

   const brn= handleMain();
   brn.forEach(element => {
    sortStudentsFrombranch(element);
   });

}
 //handleMainMain();






// getstats(130, castes);
// getstatsByBranches(130,branches);

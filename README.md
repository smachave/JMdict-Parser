# JMdict Parser

It is a CLI application that parses a JMdict XML and spits out a JSON file.

## Installation

```ShellSession
npm i -g jmdict-parser
```

## About

### JMdict

JMdict is a Japanese to X (X being English, and a couple of other languages) dictionary whose files are in XML format.

#### How it works

It simply reads the JMdict file into a Javascript object and writes that object into a file.

#### Characteristics of the output

The JSON file can be read easily for future use, and it is even **~25% smaller** than the original XML file!

## Structure of JSON output

The JSON file is essentially an array of `entry` objects. Here's what one random `entry` object looks like:

```json
{
   "ent_seq":[
      "1002340"
   ],
   "k_ele":[
      {
         "keb":[
            "お早うございます"
         ],
         "ke_pri":[
            "spec1"
         ]
      }
   ],
   "r_ele":[
      {
         "reb":[
            "おはようございます"
         ],
         "re_pri":[
            "spec1"
         ]
      }
   ],
   "sense":[
      {
         "pos":[
            "&int;"
         ],
         "xref":[
            "お早おおう"
         ],
         "misc":[
            "&uk;",
            "&pol;"
         ],
         "s_inf":[
            "may be used more generally at any time of day"
         ],
         "gloss":[
            "good morning"
         ]
      }
   ]
}
```

For more information about the key names read the comments at the start of the original JMdict files.

## Usage

* Head over to the [JMdict](http://www.edrdg.org/jmdict/edict_doc.html) website and download the **JMdict** dictionary file suitable for you. Also, you would need to extract it as it would be archived.

* Install the CLI. See [here](#Installation).

* You may run the it as follows:

```ShellSession
jmdict-parser <your_edict_file>
```

* This would generate a `.json` file in the same location as the original file.

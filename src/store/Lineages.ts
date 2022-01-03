import { ILineagesItem } from "types/ILineagesItem"
import { Image1, Image2, Image3, Image4, Image5 } from 'assets/images/lineages/index'
import { Bg1Image, Bg2Image, Bg3Image } from 'assets/images/lineages/index'

export const lineages : ILineagesItem[] = [
    {
        name : 'Xeldir',
        description : 'Xeldirs are superior to all other lineages and almost immortal. All of them are Nao’csits meaning they are bigenders.  Courtesy of that, they boast of strength and abilities of both male and female species and therefore are super rare. Though most of them are ruthless, some can show hint of mercy towards their enemies.',
        units : 10,
        imagePath : Image1,
        backgroundPath : Bg1Image
    },
    {
        name : 'Vesen Fenirs',
        description : 'Carrying the strong genetic characteristics of the female DNA, Vesen Fenirs can make even the biggest obstacles look like minor roadblocks. As they possess the blood of the noble and honourable Tribe of Truscan, they can easily cast spells of magic, chaos and are equally adept in heavy warfare.',
        units : 222,
        imagePath : Image2,
        backgroundPath : Bg2Image
    },
    {
        name : 'Vuhn Fenirs',
        description : 'Unlike Vesen Fenirs, who mate with only Vuhn Fenirs, Vuhn Fenirs can mate with Vesen Oxyzers and even Vuhn Oxyzers.  They are vastly feared and hugely esteemed warriors. Anger, pain and wrath are several major elements these divine beings are associated with.',
        units : 222,
        imagePath : Image3,
        backgroundPath : Bg3Image
    },
    {
        name : 'Vesen Oxyzers',
        description : 'It is their inner strength and will that sets the Vesen Oxyzers apart. They are mostly equipped with chains, guns and repellents but only an igorant fool should go by their appearances. Often considered more powerful than Vuhn Oxyzers , they are worshipped by the Xorbans through offerings and sacrifices.',
        units : 3879,
        imagePath : Image4,
        backgroundPath : Bg1Image
    },
    {
        name : 'Vuhn Oxyzers',
        description : 'Brave, powerful and vastly respected: the Vuhn Oxyzers were credited for building Xorbin by shedding sweat, tears and blood. If any army from the Universe have to capture Xorbin, they have to go through the Vuhn Oxyzers first. Fierce warriors the Male Oxyzers are! And they stop at nothing to protect their homeland.',
        units : 3444,
        imagePath : Image5,
        backgroundPath : Bg2Image
    },
]
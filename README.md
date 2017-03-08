#Character Creation is the Whole Game

Anyone want to help me polish a 48-hour game development/prototype game that got a bit out of hand?

https://beschizza.github.io/charactercreationisthewholegame/game.html

Github: https://github.com/beschizza/charactercreationisthewholegame

It's called "**Character Creation is the Whole Game**" and the idea was: what if the whole game took place in a classic 8/16-bit style character creation screen?


![Screenshot](https://cdn-enterprise.discourse.org/boingboing/uploads/default/optimized/3X/8/7/8723e53688d00f9147978e466c7a1eb33075281d_1_690x432.JPG "Screenshot")



When you spend one of your allocated points, your character ages and automatically experiences the adventures that in life might have resulted in greater strength, wisdom or skill. Random events take place -- dungeon plunges and hauls.  Stat choices would lead down different paths of life: with clever balancing to epic jobs and rewards, and mediocrity to those who dumbly max or spreading . And eventually you die or retire or become King.

I've got it to a playable point, but need help -- or perhaps just to pass it onto someone with the time and ability to polish it off. 

It's coded as plain HTML and javascript, using the DOM as the engine. 

You can totally play it in whatever folder it's in, but it needs to be on a legit http:// webserver for the color picker to work on the character-design part.


![Screenshot](https://cdn-enterprise.discourse.org/boingboing/uploads/default/optimized/3X/a/a/aaaa29e3fc063b0c75c67bc8b2f37bdf98543b85_1_690x421.JPG "Screenshot")


The big problems with it are as follows:

1. The pixel art images for the little character sprite sometimes don't work well. It's all javascript asynch-related stuff (images not loading until after the code tries to show them) that's just kind of beyond my ken. Right now it just waits fixed periods in hope that the assets will load in time. Works about 90% of the time... (**UPDATE**: Thank you to [Charles Julian Knight for tackling this](https://twitter.com/charlesjuliank/status/834290669741043712)!)

2. The paths from rags to riches are just a tangled, unbalanced mess! It's sort of fun, but there's not much feeling of a unique inexporable fated journey through life. 

3. There are just little bugs here and there that I'm not a  good enough coder to kill. Why does it sometimes let you go into negative points to spend? That sort of thing. 

4. I can't decide if the pop-up "want this job?" things should even exist. I kind of suspect that they should be determined by your choices and just play out in the normal text box. So the only thing you ever do is click to raise and lower stats.

5. It Needs lots of little pixel art pics for the various stories and options that pop up. 

![Screenshot](https://cdn-enterprise.discourse.org/boingboing/uploads/default/optimized/3X/0/6/063d47731f2be23a39de24f064927573b4c864c4_1_690x432.JPG "Screenshot")




That said, I think I've made a fairly neat and tidy game/story system under the hood to explore and hope that it'll be explicable and interesting enough for people to want to fool around with.
 
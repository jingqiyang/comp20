video = document.getElementById("a_classic");
caps = document.getElementById("lyrics");

video.addEventListener
   ("timeupdate", function()
{
    if (video.currentTime >= 9.5 && video.currentTime < 13.5)
	   caps.innerHTML = "<p>Children have You ever met the Bogeyman before</p>";
					   
    else if (video.currentTime >= 13.5 && video.currentTime < 17.5)
    caps.innerHTML = "<p>No, of course You haven't for You're much too good, I'm sure;</p>";
    
    else if (video.currentTime >= 17.5 && video.currentTime < 21.5)
        caps.innerHTML = "<p>Don't You be afraid of him if he should visit You,</p>";
    
    else if (video.currentTime >= 21.5 && video.currentTime < 25.5)
        caps.innerHTML = "<p>He's a great big coward, so I'll tell You what to do</p>";
    
    else if (video.currentTime >= 25.5 && video.currentTime < 29)
        caps.innerHTML = "<p>Hush, hush, hush, here comes the Bogeyman</p>";
    
    else if (video.currentTime >= 29 && video.currentTime < 33.5)
        caps.innerHTML = "<p>Don't let him come too close to You, he'll catch you if he can.</p>";
    
   else if (video.currentTime >= 33.5 && video.currentTime < 37.5)
        caps.innerHTML = "<p>Just pretend that you're a crocodile</p>";
    
    else if (video.currentTime >= 37.5 && video.currentTime < 41.5)
        caps.innerHTML = "<p>And you will find that Bogeyman will run away a mile.</p>";
   
    else if (video.currentTime >= 41.5 && video.currentTime < 45.5)
        caps.innerHTML = "<p>Say Shoo shoo and stick him with a pin</p>";
    
    else if (video.currentTime >= 45.5 && video.currentTime < 49)
        caps.innerHTML = "<p>Bogeyman will very nearly jump out of his skin</p>";
    
    else if (video.currentTime >= 49 && video.currentTime < 53)
        caps.innerHTML = "<p>Say buzz buzz just like the wasps that sting</p>";
    
    else if (video.currentTime >= 53 && video.currentTime < 57)
        caps.innerHTML = "<p>Bogeyman will think you are an elephant with wings</p>";
    
    else if (video.currentTime >= 57 && video.currentTime < 61)
        caps.innerHTML = "<p>Hush, hush, hush, here comes the Bogeyman</p>";
    
    else if (video.currentTime >= 61 && video.currentTime < 65)
        caps.innerHTML = "<p>♪ [instrumental]</p>";
    
    else if (video.currentTime >= 65 && video.currentTime < 68.5)
        caps.innerHTML = "<p>Tell him you've got soldiers in your bed</p>";
    
    else if (video.currentTime >= 68.5 && video.currentTime < 72.5)
        caps.innerHTML = "<p>For he will never guess that they are only made of lead</p>";
  
    else if (video.currentTime >= 72.5 && video.currentTime < 80.5)
        caps.innerHTML = "<p>♪ [instrumental]</p>";
    
    else if (video.currentTime >= 80.5 && video.currentTime < 84.5)
    caps.innerHTML = "<p>Say Hush hush, he'll think that you're asleep</p>";
    
    else if (video.currentTime >= 84.5 && video.currentTime < 88)
    caps.innerHTML = "<p>If you make a lovely snore away he'll softly creep</p>";
    
    else if (video.currentTime >= 88 && video.currentTime < 92)
    caps.innerHTML = "<p>Sing this tune you children one and all</p>";
    
    else if (video.currentTime >= 92 && video.currentTime < 96)
    caps.innerHTML = "<p>Bogeyman will run away, he'll think it's Henry Hall!</p>";
    
    else if (video.currentTime >= 96 && video.currentTime < 100)
    caps.innerHTML = "<p>When the shadows of the evening creep across the sky</p>";
    
    else if (video.currentTime >= 100 && video.currentTime < 104)
    caps.innerHTML = "<p>And your Mummy comes upstairs to sing a lullaby</p>";
    
    else if (video.currentTime >= 104 && video.currentTime < 108)
    caps.innerHTML = "<p>Tell her that the bogeyman no longer frightens you</p>";
    
    else if (video.currentTime >= 108 && video.currentTime < 111.5)
    caps.innerHTML = "<p>Uncle Henry's very kindly told you what to do</p>";

    else if (video.currentTime >= 111.5 && video.currentTime < 115.5)
    caps.innerHTML = "<p>Hush, hush, hush, here comes the Bogeyman</p>";
    
    else if (video.currentTime >= 115.5 && video.currentTime < 119.5)
    caps.innerHTML = "<p>Don't let him come too close to you, He'll catch you if he can.</p>";
    
    else if (video.currentTime >= 119.5 && video.currentTime < 123)
    caps.innerHTML = "<p>Just pretend your teddy bear's a dog</p>";
    
    else if (video.currentTime >= 123 && video.currentTime < 126.5)
    caps.innerHTML = "<p>Then shout out, 'Fetch him, Teddy!' and he'll hop off like a frog.</p>";
    
    else if (video.currentTime >= 126.5 && video.currentTime < 135)
        caps.innerHTML = "<p>♪ [instrumental]</p>";
    
    else if (video.currentTime >= 135 && video.currentTime < 139)
    caps.innerHTML = "<p>Say Meoow, pretend that you're a cat</p>";
    
    else if (video.currentTime >= 139 && video.currentTime < 143)
    caps.innerHTML = "<p>He'll think you may scratch him that make him fall down flat</p>";
    
    else if (video.currentTime >= 143 && video.currentTime < 147)
    caps.innerHTML = "<p>Just pretend he isn't really there</p>";
    
    else if (video.currentTime >= 147 && video.currentTime < 150.5)
    caps.innerHTML = "<p>You will find that Bogey man will vanish in thin air</p>";
    
    else if (video.currentTime >= 150.5 && video.currentTime < 158.5)
        caps.innerHTML = "<p>♪ [instrumental]</p>";
  
    else if (video.currentTime >= 158.5 && video.currentTime < 162.5)
    caps.innerHTML = "<p>Here's one way to catch him without fail</p>";
    
    else if (video.currentTime >= 162.5 && video.currentTime < 166)
    caps.innerHTML = "<p>Just keep a little salt with you and put it on his tail</p>";
    
    else
        caps.innerHTML = "";
}, false);

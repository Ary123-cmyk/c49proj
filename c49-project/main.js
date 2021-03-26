tl= gsap.timeline()
.fromTo('#titl',{opacity:0, y:15, fontSize:'7vw'},{opacity:1, y:0, fontSize:'6vw' ,duration:1, delay:0})
.fromTo('#ttimg',{opacity:0, y:100, filter:'blur(15px) saturate(0%)'},{opacity:1, filter:'blur(0px) saturate(100%)',y:0 ,duration:2, delay:0, stagger:0.2})
.fromTo('#chv',{opacity:0, y:-50, filter:'blur(15px)'},{opacity:1, filter:'blur(0px)',y:0 ,duration:1, delay:-0.6})
.add( function(){document.getElementById('chv').addEventListener('mouseover', function() {gsap.to('#chv', {scale:1.1})})})
.add( function(){document.getElementById('chv').addEventListener('mouseout', function() {gsap.to('#chv', {scale:1})})})
.add( function(){document.getElementById('chv').addEventListener('click', function() {gsap.to(window, {scrollTo:{y:730, autoKill:true},duration:1})})})
document.getElementById('idd2').addEventListener('mouseover', function() {gsap.to('.desc2',{opacity:1, fontSize:'14pt' ,delay:0.5});
gsap.to('#hbd',{opacity:1,duration:1 ,delay:0.5})
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Hummingbird'})
tl.to('#od', {opacity:1});
gsap.to('#idd1, #idd3', {opacity:0.1, scale:0.8})})
document.getElementById('idd2').addEventListener('mouseout', function() {gsap.to('.desc2',{opacity:0, fontSize:'12pt' ,delay:0});
gsap.to('#hbd',{opacity:0});
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Our Designs'})
tl.to('#od', {opacity:1});
gsap.to('#idd1, #idd3', {opacity:1, scale:1});
gsap.to('.desc1, .desc3', {opacity:0, fontSize:'12pt'});
gsap.to('#tbd, #bbd', {opacity:0})})
document.getElementById('idd1').addEventListener('mouseover', function() {gsap.to('.desc1',{opacity:1, fontSize:'14pt' ,delay:0.5});
gsap.to('#bbd',{opacity:1, delay:0.5});
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Butterfly'})
tl.to('#od', {opacity:1});
gsap.to('#idd2, #idd3', {opacity:0.1, scale:0.8});
gsap.to('.desc2, .desc3', {opacity:0, fontSize:'12pt'});
gsap.to('#hbd, #tbd', {opacity:0})})
document.getElementById('idd1').addEventListener('mouseout', function() {gsap.to('.desc1',{opacity:0, fontSize:'12pt' ,delay:0});
gsap.to('#bbd',{opacity:0});
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Our Designs'})
tl.to('#od', {opacity:1});
gsap.to('#idd2, #idd3', {opacity:1, scale:1})})
document.getElementById('idd3').addEventListener('mouseover', function() {gsap.to('.desc3',{opacity:1, fontSize:'14pt' ,delay:0.5});
gsap.to('#tbd',{opacity:1});
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Turtle'})
tl.to('#od', {opacity:1});
gsap.to('#idd1, #idd2', {opacity:0.1, scale:0.8});
gsap.to('.desc2, .desc1', {opacity:0, fontSize:'12pt'});
gsap.to('#hbd, #bbd', {opacity:0})})
document.getElementById('idd3').addEventListener('mouseout', function() {gsap.to('.desc3',{opacity:0, fontSize:'12pt' ,delay:0});
gsap.to('#tbd',{opacity:0});
tl = gsap.timeline();
tl.to('#od', {opacity:0})
tl.add(function(){document.getElementById('od').innerHTML='Our Designs'})
tl.to('#od', {opacity:1});
gsap.to('#idd1, #idd2', {opacity:1, scale:1})})
document.getElementById('idd2').addEventListener('click',function(){window.location.href = "https://www.youtube.com/watch?v=UB9yfXRWyis";})
document.getElementById('idd1').addEventListener('click',function(){window.location.href = "https://www.youtube.com/watch?v=cZdO2e8K29o";})
document.getElementById('idd3').addEventListener('click',function(){window.location.href = "https://www.youtube.com/watch?v=JlJsU8tspfc";})
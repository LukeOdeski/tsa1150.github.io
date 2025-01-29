var stars = []
var starsSpeed = []
var starsAngle = []

var backdrop = new Rectangle(getWidth(), getHeight())
backdrop.setColor(Color.black);
backdrop.setPosition(0,0);
add(backdrop);
function start()
{
    backdrop.setSize(getWidth(),getHeight());
    for(let i = 0; i <1000; i++)
    {
        makeStars();
    }
    setTimer(tick, 1000/60);
}

function getComps(speed, angle)
{
    var ans = []; //x,y

    ans.push(speed*Math.cos(angle));
    ans.push(speed*Math.sin(angle));
    return ans;

}

function tick()
{
    //makeStars();
    moveStars();
    removeStars();
}

function makeStars()
{
    var star = new Rectangle(1,1);
    star.setPosition(getWidth()/2, getHeight()/2);
    star.setColor(Color.white);
    add(star);
    var randSpeed = Randomizer.nextFloat(1, 10);
    var randAngle = Randomizer.nextFloat(0, 2*Math.PI);
    stars.push(star)
    starsSpeed.push(randSpeed);
    starsAngle.push(randAngle);
    //println(stars)
    //println(starsSpeed);
    //println(starsAngle);

}

function moveStars()
{
    
    for(let i = 0; i < stars.length; i ++)
    {
        var comps = getComps(starsSpeed[i], starsAngle[i]);
        var cur = stars[i];
        cur.setSize(cur.getWidth() * 1.01, cur.getHeight() * 1.01);
        starsSpeed[i] *= 1.01;
        cur.move(comps[0], comps[1]);
    }
}

function removeStars()
{
    for(let i = 0; i < stars.length; i++)
    {
        var cur = stars[i];
        if(cur.getX() < 0 || cur.getX() > getWidth() || cur.getY() < 0 || cur.getY() > getHeight())
        {
            cur.setPosition(getWidth()/2, getHeight()/2);
            var randSpeed = Randomizer.nextFloat(1, 10);
            var randAngle = Randomizer.nextFloat(0, 2*Math.PI);
            cur.setSize(1,1)
            starsSpeed[i] = randSpeed;
            starsAngle[i] = randAngle;
        }
    }
}

async function refresh(){
  $('.boksi').each(function(){this.checked=false;});
	const pasta = await navigator.clipboard.readText();
	console.log(pasta);
	var lines = pasta.replace(/[^A-Za-z_\n]+/g,"_").toLowerCase().split('\n');
  lines.forEach(function(value,index,array){
  {
    document.getElementById(value).checked=true;
  }});
}

diylist = [
{
  "category": "Villager: Big Sister",
  "diys": ["apple hat","apple umbrella","DIY workbench","flower stand","street piano","wooden-block bench","apple chair","apple dress","apple rug","apple wall","birdcage","brown herringbone wall","dark wooden-mosaic wall","hyacinth lamp","iron closet","iron doorplate","iron garden bench","iron garden chair","iron garden table","iron shelf","iron worktable","juicy-apple TV","key holder","leaf umbrella","shell lamp","shell partition","shell speaker","shell stool","tree branch wreath","wooden mini table","wooden table","wooden table mirror","wooden waste bin","wooden-block table"]
},
{
  "category": "Villager: Cranky",
  "diys": ["knight's helmet","pile of zen cushions","scarecrow","wild-wood wall","armor shoes","bamboo flooring","bamboo hat","bamboo partition","bamboo wall","barrel","bonfire","bonsai shelf","clothesline","dark bamboo rug","deer scare","fruit basket","fruit wreath","gong","infused-water dispenser","iron armor","iron hanger stand","ironwood DIY workbench","ironwood table","jail bars","kettle bathtub","lily record player","log dining table","modeling clay","pot","raccoon figurine","sleigh","standard umbrella stand","tea table","tiki torch","wooden-plank sign"]
},
{
  "category": "Villager: Jock",
  "diys": ["bamboo drum","bamboo stopblock","bamboo wall decoration","barbell","beekeeper's hive","doghouse","firewood","fossil doorplate","honeycomb flooring","honeycomb wall","iron frame","jungle flooring","jungle wall","kettlebell","leaf","log pack","mountain standee","oil-barrel bathtub","pear bed","pear dress","pear hat","pear rug","pear umbrella","pear wall","pear wardrobe","pitfall seed","plain wooden shop sign","sandy-beach flooring","simple DIY workbench","stacked-wood wall","tree standee","trophy case","tulip surprise box","wild log bench"]
},
{
  "category": "Villager: Lazy",
  "diys": ["large cardboard boxes","matryoshka","medium cardboard boxes","shell arch","angled signpost","bone doorplate","boomerang","cardboard bed","cardboard chair","clackercart","deer decoration","garden rock","golden arowana model","golden dung beetle","log wall-mounted clock","mossy garden rock","music stand","orange dress","orange end table","orange hat","orange rug","orange umbrella","orange wall","orange wall-mounted clock","sauna heater","shell fountain","signpost","stack of books","stone table","water pump","windflower fan","wooden bookshelf","wooden chest","wooden simple bed","zen-style stone"]
},
{
  "category": "Villager: Normal",
  "diys": ["bamboo bench","bamboo floor lamp","bamboo sphere","classic-library wall","cutting board","floral swag","grass skirt","grass standee","hedge standee","knitted-grass backpack","log bench","log chair","log decorative shelves","log extra-long sofa","natural garden table","natural square table","pansy table","peach chair","peach dress","peach hat","peach rug","peach surprise box","peach umbrella","peach wall","rocking horse","terrarium","tiny library","traditional straw coat","western-style stone","wooden toolbox","wooden-block bed","wooden-block chest","wooden-mosaic wall","woodland wall"]
},
{
  "category": "Villager: Peppy",
  "diys": ["shell bed","backyard lawn","birdhouse","cabin wall","cardboard sofa","cardboard table","cherry dress","cherry hat","cherry lamp","cherry rug","cherry speakers","cherry umbrella","cherry wall","garden wagon","giant teddy bear","green grass skirt","hanging terrarium","leaf mask","log bed","log garden lounge","log round table","log stool","magazine rack","manga-library wall","mum cushion","natural garden chair","paw-print doorplate","shell rug","shell table","small cardboard boxes","stacked magazines","wooden full-length mirror","wooden stool","wooden-block stool","wooden-block wall clock"]
},
{
  "category": "Villager: Smug",
  "diys": ["basement flooring","ironwood clock","rose bed","tall lantern","ukulele","acoustic guitar","chocolate herringbone wall","crest doorplate","decoy duck","document stack","gold armor","gold helmet","gold-armor shoes","gold-screen wall","golden candlestick","golden casket","golden flooring","golden gears","golden wall","iron wall rack","ironwood bed","ironwood cart","ironwood chair","log stakes","scattered papers","steel flooring","steel-frame wall","stone lion-dog","stone wall","straw umbrella hat","wooden bucket","wooden double bed","wooden low table","wooden-knot wall"]
},
{
  "category": "Villager: Snooty",
  "diys": ["ironwood cupboard","unglazed dish set","aroma pot","bamboo basket","bamboo candleholder","bamboo lunch box","bamboo shelf","bamboo speaker","bamboo stool","birdbath","butter churn","classic pitcher","coconut juice","coconut wall planter","cosmos shower","flat garden rock","garden bench","gold bars","golden dishes","golden seat","golden toilet","ironwood dresser","ironwood low table","lucky gold cat","modern wood wall","money flooring","palm-tree lamp","pond stone","rustic-stone wall","tall garden rock","timber doorplate","wooden chair","wooden end table"]
},
{
  "category": "Wreaths and crowns",
	"diys": ["blue rose wreath","chic cosmos wreath","chic windflower wreath","cool hyacinth wreath","cool pansy wreath","cool windflower wreath","cosmos wreath","dark lily wreath","dark rose wreath","dark tulip wreath","fancy lily wreath","fancy mum wreath","fancy rose wreath","gold rose wreath","hyacinth wreath","lily wreath","mum wreath","natural mum wreath","pansy wreath","pretty cosmos wreath","pretty tulip wreath","purple hyacinth wreath","rose wreath","snazzy pansy wreath","tulip wreath","windflower wreath","blue rose crown","chic mum crown","chic rose crown","chic tulip crown","cool hyacinth crown","cool pansy crown","cool windflower crown","cosmos crown","cute lily crown","cute rose crown","dark cosmos crown","dark lily crown","dark tulip crown","gold rose crown","hyacinth crown","lily crown","lovely cosmos crown","mum crown","pansy crown","purple hyacinth crown","purple pansy crown","purple windflower crown","rose crown","simple mum crown","tulip crown","windflower crown"]
},
{
  "category": "Celeste",
  "diys": ["asteroid","astronaut suit","crewed spaceship","flying saucer","galaxy flooring","golden wand","hyacinth wand","iron wand","lily wand","lunar lander","lunar rover","moon","nova light","pansy wand","rocket","rose wand","sci-fi flooring","space shuttle","star clock","star head","star pochette","starry wall","starry-sky wall","tree-branch wand","wand","windflower wand","cosmos wand","crescent-moon chair","lunar surface","mums wand","satellite","sci-fi wall","star wand","starry garland","tulip wand"]
},
{
  "category": "Celeste Zodiac",
  "diys": ["Aries rocking chair","Taurus bathtub","Gemini closet","Cancer table","Leo sculpture","Virgo harp","Libra scale","Scorpio lamp","Sagittarius arrow","Capricorn ornament","Aquarius urn","Pisces lamp"]
},
{
  "category": "Pascal",
  "diys": ["mermaid bed","mermaid chair","mermaid closet","mermaid dresser","mermaid flooring","mermaid lamp","mermaid rug","mermaid screen","mermaid shelf","mermaid sofa","mermaid table","mermaid vanity","mermaid wall","mermaid wall clock"]
},
{
  "category": "Basic recipes",
  "diys": ["campfire","flimsy fishing rod","flimsy net","hedge","wooden wardrobe","medicine","fish bait","King Tut mask"]
},
{
  "category": "Nook's Cranny",
  "diys": ["brick oven","flimsy axe","flimsy shovel","flimsy watering can","frying pan","hay bed","hearth","iron wall lamp","ironwood kitchenette","ladder","mini DIY workbench","ocarina","old-fashioned washtub","plain sink","potted ivy","ringtoss","rocking chair","slingshot","stone stool","swinging bench","vaulting pole","wooden fish","wooden-block bookshelf","wooden-block chair","wooden-block stereo","wooden-block toy"]
},
{
  "category": "Golden tools",
  "diys": ["golden watering can","golden axe","golden net","golden rod","golden shovel","golden slingshot"]
},
{
  "category": "Fishing up trash",
  "diys": ["recycled boots","trash bags","recycled-can thumb piano","succulent plant","tire toy","tire stack","garbage-heap flooring","garbage-heap wall"]
},
{
  "category": "Nook Miles Exchange",
  "diys": ["brick well","destinations signpost","manhole cover","robot hero","silo","simple well","stall","stone tablet","wave breaker","axe","bamboo lattice fence","barbed-wire fence","brick fence","corral fence","country fence","drinking fountain","fishing rod","fountain","imperial fence","iron fence","iron-and-stone fence","lattice fence","net","outdoor bath","rope fence","shovel","simple wooden fence","spiky fence","stone arch","stone axe","stone fence","straw fence","vertical-board fence","watering can","zen fence"]
},
{
  "category": "Balloons; Cherry-Blossom",
  "diys": ["blossom-viewing lantern","cherry-blossom bonsai","cherry-blossom branches","cherry-blossom clock","cherry-blossom flooring","cherry-blossom pochette","cherry-blossom pond stone","cherry-blossom umbrella","cherry-blossom wand","cherry-blossom-petal pile","cherry-blossom-trees wall","outdoor picnic set","sakura-wood flooring","sakura-wood wall"]
},
{
  "category": "Balloons; Spring",
  "diys": ["bamboo doll","bamboo noodle slide","bamboo wand","bamboo-grove wall","bamboo-shoot lamp","basket pack","green-leaf pile","light bamboo rug","pan flute","steamer-basket set"]
},
{
  "category": "Balloons; Summer",
  "diys": ["shell wand","shell wreath","shellfish pochette","starry-sands flooring","tropical vista","underwater flooring","underwater wall","water flooring"]
},
{
  "category": "Balloons; Fall",
  "diys": ["acorn pochette","leaf campfire","pile of leaves","pine bonsai tree","traditional balancing toy","tree's bounty lamp","tree's bounty little tree","tree's bounty mobile","yellow-leaf pile"]
},
{
  "category": "Balloons; Mushroom",
  "diys": ["forest flooring","forest wall","mush lamp","mush log","mush low stool","mush parasol","mush partition","mush table","mush umbrella","mush wall","mushroom wand","mushroom wreath"]
},
{
  "category": "Balloons; Maple Leaf",
  "diys": ["autumn wall","colored-leaves flooring","leaf stool","maple-leaf pochette","maple-leaf pond stone","maple-leaf umbrella","red-leaf pile","tree's bounty arch","tree's bounty big tree"]
},
{
  "category": "Balloons; Winter",
  "diys": ["iceberg flooring","iceberg wall","ski-slope flooring","ski-slope wall","snowflake pochette","snowflake wall","snowflake wreath"]
},
{
  "category": "Balloons; Festive",
  "diys": ["big festive tree","festive top set","festive tree","holiday candle","illuminated present","illuminated reindeer","illuminated snowflakes","illuminated tree","Jingle wall","ornament mobile","ornament wreath","tabletop festive tree"]
},
{
  "category": "Wedding season",
  "diys": ["wedding wand","wedding fence"]
},
{
  "category": "Snowboy",
  "diys": ["frozen arch","frozen bed","frozen chair","frozen counter","frozen partition","frozen pillar","frozen sculpture","frozen table","frozen tree","frozen-treat set","ice flooring","ice wall","ice wand","snowperson head","three-tiered snowperson"]
},
{
  "category": "Bunny Day; Any villager",
  "diys": ["Bunny Day bag","Bunny Day crown"]
},
{
  "category": "Bunny day; Collecting eggs",
  "diys": ["earth-egg outfit","earth-egg shell","earth-egg shoes","leaf-egg outfit","leaf-egg shell","leaf-egg shoes","sky-egg outfit","sky-egg shell","sky-egg shoes","stone-egg outfit","stone-egg shell","stone-egg shoes","water-egg outfit","water-egg shell","water-egg shoes","wood-egg outfit","wood-egg shell","wood-egg shoes"]
},
{
  "category": "Bunny day; Egg bottle / egg balloon",
  "diys": ["Bunny Day bed","Bunny Day fence","Bunny Day festive balloons","Bunny Day flooring","Bunny Day glowy garland","Bunny Day merry balloons","Bunny Day rug","Bunny Day stool","Bunny Day table","Bunny Day vanity","Bunny Day wall","Bunny Day wall clock","Bunny Day wardrobe","Bunny Day wreath","Bunny Day lamp"]
},
{
  "category": "Bunny day; Zipper",
  "diys": ["Bunny Day arch","Bunny Day wand","wobbling Zipper toy"]
},
{
  "category": "Bunny day; Learning egg outfits",
  "diys": ["egg party dress","egg party hat"]
}
];

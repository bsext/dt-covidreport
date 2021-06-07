var Jimp = require("jimp")

function report_img(prm,cb){

    var prm_bg = prm.bg || __dirname + '/img/bg.png'

    var txt_date = prm.txt_date || '-'
    var txt_today_case = prm.txt_today_case || '0'
    var txt_case = prm.txt_case || '0'
    var txt_today_death = prm.txt_today_death || '0'
    var txt_death = prm.txt_death || '0'
    var txt_active = prm.txt_active || '0'
    var txt_critical = prm.txt_critical || '0'
    var txt_recover = prm.txt_recover || '0'

    Jimp.read(prm_bg, (err, image) => {
        if (err){
            return cb(err)
        }
        
        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font32b => {
            Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font64w => {
                    Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font32w => {
                        //date
                        image.print(font32b, 769, 170, String(txt_date));
                        //todayCase
                        image.print(font64w, 148, 440, String(txt_today_case));
                        //case
                        image.print(font32w, 414,472, String(txt_case));
                        //todayDeath
                        image.print(font64w, 644, 440, String(txt_today_death));
                        //alldeath
                        image.print(font32w, 832,472, String(txt_death));
                        //active
                        image.print(font64w, 152, 710, String(txt_active));
                        //critical
                        image.print(font32w, 414, 740, String(txt_critical));
                        //recover
                        image.print(font64w, 646, 710, String(txt_recover));
    
                        //image.write('out.png')
                        image.getBuffer(Jimp.MIME_PNG, cb)
                });
            });
        });
    });


}

module.exports.report_img = report_img
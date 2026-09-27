const PhotoSession = {
 angles: [['На рівні очей','eye-level front view'],['Три чверті','three-quarter view at eye level'],['Профіль зліва','left side profile at eye level'],['Профіль справа','right side profile at eye level'],['Знизу','low-angle view, camera below eye level'],['Зверху','high-angle view, camera above eye level'],['Зі спини','rear view, subject facing away from camera'],['Через плече','over-the-shoulder view']],
 presets: [
 ['Знайомство',0,2,'Stand naturally with relaxed shoulders.','Природна стійка, розслаблені плечі.'],
 ['Портрет',1,0,'Turn the shoulders slightly, look toward the camera.','Легкий поворот плечей, погляд у камеру.'],
 ['Профіль',2,3,'Keep the chin neutral and gaze into the distance.','Погляд удалину, природне положення підборіддя.'],
 ['Рух',4,2,'Take a natural step, relaxed hands, subtle motion in clothing.','Природний крок і легкий рух одягу.'],
 ['Атмосфера',6,4,'Face away from the camera, pause to observe the surroundings.','Спиною до камери, погляд на оточення.'],
 ['Тихий момент',5,1,'Relax the shoulders and gently lower the gaze.','Розслаблені плечі, погляд трохи вниз.'],
 ['Інший бік',3,0,'Hold a calm posture and a thoughtful expression.','Спокійна поза і задумливий вираз.'],
 ['Поворот',7,1,'Turn the head slightly toward the camera over one shoulder.','Легкий поворот голови через плече.'],
 ['Емоція',0,3,'Show a subtle spontaneous smile with a natural expression.','Легка невимушена усмішка.'],
 ['Фінальний кадр',1,4,'Stand at ease within the environment, relaxed arms and balanced posture.','Невимушена поза в оточенні локації.']
 ],
 makeShot(base,settings,index,total){const {composition,...shared}=base;return {...shared,shot_number:index+1,total_shots:total,angle:settings.custom.trim()||settings.angle,composition:settings.framing,pose:settings.pose.trim()||'Natural relaxed pose.',continuity:'Keep the same person, outfit, hairstyle, location, time of day and color palette across the series. Treat subject text as the shared scene brief; this shot’s explicit pose, angle and framing take priority over any conflicting pose or framing in that brief.',output:'Generate one photograph only, no collage or contact sheet.'}},
 toText(p){return `Create a photorealistic image.\n\nSubject: ${p.subject}\n\nStyle: ${p.style}.\nCamera: ${p.camera}.\nLighting: ${p.lighting}.\nComposition: ${p.composition}.\n${p.angle?'Camera angle: '+p.angle+'.\n':''}${p.pose?'Pose: '+p.pose+'\n':''}Aspect ratio: ${p.aspect_ratio}.\nQuality: ${p.quality}.\n\nReference: ${p.reference}\n${p.continuity?'\nSeries continuity: '+p.continuity+'\n':''}${p.output?'\nOutput: '+p.output+'\n':''}\nAvoid: ${p.avoid}`}
};
if(typeof module!=='undefined')module.exports=PhotoSession;

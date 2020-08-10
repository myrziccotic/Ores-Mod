/**
 * Ничего серьезного
 * и вообще
 * тут говнокод
 * уйди
 */

 var KotoffeyMatch = {
     randomYaw:function(){
         return Math.random() * 2 * Math.PI;
     },
     randomPitch:function(){
        return Math.random * Math.PI - Math.PI / 2;
     },
     selectRandom:function(a, b){
         return Math.random() > .45 ? a : b;
     },
     randomFloat:function(max, min){
        return Math.random() * (max - min) + min;
     },
     randomInt:function(max, min){
        return Math.floor(this.randomFloat(max, min));
     },
     HORIZONTAL_DEFAULT: 1,
     HORIZONTAL_DIRECTION_INVERSE: -1,
     VERTICAL_DIRECTION_TOP: 1,
     VERTICAL_DIRECTION_BOTTON: -1,
     rotatedAnimationInstance:function(obj){
        this.startCoords = obj.coords;
        this.age = 0;
        this.animation = new Animation.Item(this.startCoords.x, this.startCoords.y, this.startCoords.z);
        this.updateFunction = null;
        //значения описания
        let desc = obj.description || {};
        this.id = desc.id || 264;
        this.count = desc.count || 1;
        this.data = desc.data || 0;
        this.size = desc.size || .5;
        this.rotation = desc.rotation || [0, Math.PI * .5, 0];
        this.notRandomize = desc.notRandomize || true;
        /**
         * значения направления движений анимации
         * alpha - положение анимации на виртуальной окружности
         * horizontalDirection - направление движения анимации по виртуальной окружности
         * verticalDirection - начальное горизонтальное направление анимации
         * radius - радиус виртуальной окружности
         * speed - скорость движение по виртуальной окружности
         */
        this.alpha = KotoffeyMatch.randomYaw();
        this.horizontalDirection = KotoffeyMatch.selectRandom(KotoffeyMatch.HORIZONTAL_DEFAULT, KotoffeyMatch.HORIZONTAL_DIRECTION_INVERSE);
        this.verticalDirection = KotoffeyMatch.selectRandom(KotoffeyMatch.VERTICAL_DIRECTION_TOP, KotoffeyMatch.VERTICAL_DIRECTION_BOTTON);
        this.radius = obj.radius || KotoffeyMatch.randomFloat(1.6, 1.4);
        this.speed = obj.speed || KotoffeyMatch.randomFloat(.15, .1);
        this.speed *= this.horizontalDirection;
        /**
         * значения-сохранения положения анимации
         * rotationSpeed - (исключение) скорость оборота анимации
         * currentHRotation - сохраненное вращение анимации по горизонтали
         * currentVRotation - то же самое, но по вертикали
         */
        this.rotationSpeed = Math.PI * 2 / this.speed;
        this.currentHRotation = 0;
        this.currentVRotation = this.startCoords.y;

        this.describe = function(rotation){
            const id = this.id, count = this.count, data = this.data, notRandomize = this.notRandomize, 
                size = this.size;

            this.animation.describeItem({
                id: id,
                count: count,
                data: data,
                size: size,
                rotation: rotation,
                notRandomize: notRandomize
            });
        }
        this.describe(this.rotation);

        this.getAge = function(){
            return this.age;
        }

        this.destroy = function(){
            this.animation.destroy();
        }

        this.setUpdateFunction = function(func){
            this.updateFunction = func;
        }
     },
     loadRotatedAnimation:function(instance){
        if(instance instanceof KotoffeyMatch.rotatedAnimationInstance){
            instance.animation.loadCustom(function(){
                const start = instance.startCoords;
                instance.age++;
                let coords = this.coords;
                coords.x = start.x + Math.sin(instance.alpha) * instance.radius + .5;
                coords.y = instance.currentVRotation + (Math.sin(.02) * instance.verticalDirection);
                coords.z = start.z + Math.cos(instance.alpha) * instance.radius + .5;
                if(World.getThreadTime()%30 == 0) instance.verticalDirection *= -1;
                this.setPos(coords.x, coords.y, coords.z);
                this.refresh();
                instance.currentVRotation = coords.y;
                instance.alpha += instance.speed * instance.horizontalDirection;
                instance.describe(instance.rotation);
                instance.rotation[1] += Math.PI * 2 / instance.rotationSpeed * -instance.horizontalDirection;
                if(instance.updateFunction) instance.updateFunction(coords, instance);
            });
        }
     },
     particleSphere:function(coords, radius){
        this.context = UI.getContext();

        this.emitter = new Particles.ParticleEmitter(coords.x, coords.y, coords.z);
        this.getemitter = function(){
            return this.emitter;
        }

        this.stopRequired = false;
        this.requireStop = function(){
            this.stopRequired = true;
        }

        this.coords = coords;
        this.setCoords = function(coords){
            this.coords = coords;
        }

        this.radius = radius || 1;
        this.setRadius = function(radius){
            this.radius = radius;
        }

        this.particleType = Native.ParticleType.flame;
        this.setParticleType = function(type){
            this.particleType = type;
        }

        this.particlesDensity = 3;
        this.setParticlesDensity = function(count){
            this.particlesDensity = count;
        }

        this.durationEmit = function(iterationsCount, timeMillis){
            this.emit();
            if(iterationsCount - 1 > 0){
                this.context.runOnUiThread(
                    new java.lang.Runnable({
                        run:function(){
                            new android.os.Handler().postDelayed(
                                new java.lang.Runnable({
                                    run:function(){
                                        this.durationEmit(iterationsCount -1, timeMillis);
                                    }
                                }), timeMillis || 1000
                            );
                        }
                    })
                );
            }
        }

        this.emit = function(){
            const c = this.coords;
            const r = this.radius;
            const type = this.particleType;
            for(var i = 0; i < this.particlesDensity; i++){
                let pitch = KotoffeyMatch.randomPitch();
                let yaw = KotoffeyMatch.randomYaw();
                let px = c.x + Math.sin(yaw) * Math.cos(pitch) * r;
                let py = c.y + Math.sin(pitch) + Math.cos(pitch) * r;
                let pz = c.z + Math.cos(yaw) * Math.cos(pitch) * r;
                this.emitter.emit(type, 0, px, py, pz);
            }
        }
     }
 }
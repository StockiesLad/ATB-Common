package net.stockieslad.atb_core.internal.mixin;

import net.stockieslad.atb_core.core.ATBCore;
import net.minecraft.client.texture.SpriteAtlasHolder;
import net.minecraft.client.texture.SpriteAtlasTexture;
import net.minecraft.client.texture.StatusEffectSpriteManager;
import net.minecraft.resource.ResourceManager;
import net.minecraft.util.profiler.Profiler;
import net.stockieslad.atb_core.internal.BootTimer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(SpriteAtlasHolder.class)
public abstract class SpriteAtlasHolderMixin {
    private static boolean EXPIRED = false;

    @SuppressWarnings("ConstantValue")
    @Inject(method = "apply(Lnet/minecraft/client/texture/SpriteAtlasTexture$Data;Lnet/minecraft/resource/ResourceManager;Lnet/minecraft/util/profiler/Profiler;)V", at = @At("TAIL"))
    private void timerEnd(SpriteAtlasTexture.Data data, ResourceManager resourceManager, Profiler profiler, CallbackInfo ci) {
        if (!EXPIRED && (SpriteAtlasHolder)(Object)this instanceof StatusEffectSpriteManager) {
            BootTimer.STOP_WATCH.stop();
            ATBCore.LOGGER.info("");
            ATBCore.LOGGER.info("Loading time (Seconds): " + BootTimer.getTimeInSeconds());
            ATBCore.LOGGER.info("");
            EXPIRED = true;
        }
    }
}
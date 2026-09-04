// Web Audio API Sound Effects Engine for Linear-grade Tactile UI Feedback

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    // Read preference from localStorage, default to enabled
    const saved = localStorage.getItem('portfolio_sound_enabled');
    if (saved !== null) {
      this.enabled = saved === 'true';
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(state: boolean) {
    this.enabled = state;
    localStorage.setItem('portfolio_sound_enabled', String(state));
    if (state) {
      this.playToggle(true);
    }
  }

  public toggle(): boolean {
    const newState = !this.enabled;
    this.setEnabled(newState);
    return newState;
  }

  // Ultra-crisp Linear tactile click sound (12ms sine + noise tap)
  public playClick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1100, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.012);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.012);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.012);
    } catch {
      // Ignore audio context errors gracefully
    }
  }

  // Soft tab switch sound (20ms pop)
  public playTab() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.018);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.018);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.018);
    } catch {
      // Ignore audio context errors gracefully
    }
  }

  // Micro hover tick sound (6ms)
  public playHover() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1600, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.006);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.006);
    } catch {
      // Ignore audio context errors gracefully
    }
  }

  // Sound toggle feedback sound
  public playToggle(isOn: boolean) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      if (isOn) {
        osc.frequency.setValueAtTime(520, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1040, this.ctx.currentTime + 0.04);
      } else {
        osc.frequency.setValueAtTime(900, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.04);
      }

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Ignore audio context errors
    }
  }
}

export const sound = new SoundEngine();

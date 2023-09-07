#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

pokeget riolu


alias ls='lsd'
alias grep='grep --color=auto'
alias cat='bat'
alias kimage='kitty +kitten icat'
alias vpn-terraria='sudo systemctl start zerotier-one.service && zerotier-cli join 8286ac0e475ee662'
alias vpn-terraria-close='zerotier-cli leave 8286ac0e475ee662 && sudo systemctl stop zerotier-one.service'

set_wallpaper() {
    wallpaper_path="$1"
    script_path="/home/zangleik/.config/swww/swwwallpaper.sh"  # Reemplaza esto con la ruta real al script swwwallpaper.sh

    # Verificar si el archivo del fondo de pantalla existe
    if [ -f "$wallpaper_path" ]; then
        # Ejecutar el script con la opción -s y pasar la ruta del fondo de pantalla
        "$script_path" -s "$wallpaper_path"
    else
        echo "ERROR: Wallpaper not found: $wallpaper_path"
    fi
}


PS1='[\u@\h \W]\$ '

eval "$(starship init bash)"

export LIBVA_DRIVER_NAME=nvidia
export XDG_SESSION_TYPE=wayland
export GBM_BACKEND=nvidia-drm
export __GLX_VENDOR_LIBRARY_NAME=nvidia
export WLR_NO_HARDWARE_CURSORS=1

bind "\C-\M-[A":previous-screen-line
bind "\C-\M-[B":next-screen-line
export PATH=$PATH:/home/zangleik/.spicetify

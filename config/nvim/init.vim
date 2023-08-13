" Configuraciones
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set number

" Llamar a vim-plug
call plug#begin('~/.config/nvim/plugged')
" Aquí es donde se agregarán los complementos
" Tema Tokyo Night
Plug 'folke/tokyonight.nvim'

" Plugin de Autocompletado
Plug 'neoclide/coc.nvim', {'do': 'yarn install --frozen-lockfile'}

"Marcar tabulación
Plug 'Yggdroot/indentLine'

"Detectar yuck (eww)
Plug 'elkowar/yuck.vim'

call plug#end()

"Configuración del tema
syntax enable
colorscheme tokyonight-moon

"Configuración de coc.nvim
autocmd FileType * silent! call CocStart()

"Mapeo de teclas autocompletado
inoremap <expr> <Tab> pumvisible() ? "\<C-y>" : "\<Tab>"
inoremap <expr> <CR> pumvisible() ? "\<C-y>" : "\<CR>"

"Configuración de tabulación
let g:indentLine_char = '|'
let g:indentLine_setColors = 0

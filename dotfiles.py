import os
import sys 


def checkbashrc(f):
    HOME = os.getenv("HOME")
    bashrc1 = HOME + "/.bashrc"
    bashrc2 = os.getcwd() + "/.bashrc"
    bashdate1 = os.path.getmtime(bashrc1)
    bashdate2 = os.path.getmtime(bashrc2)
    if bashdate1 > bashdate2:
        recentfile = bashrc1
    else: 
        recentfile = bashrc2
    return recentfile


def verifydate(files,mode):
    HOME = os.getenv("HOME")
    path1 = HOME + "/.config/"
    path2 = os.getcwd()

    recent = []

    for f in files:
        if f == ".bashrc":
            recent.append(checkbashrc(f))
        else:
            tempfilepath1 = os.path.join(path1, f)
            tempfilepath2 = os.path.join(path2, f)
            filepath1 = tempfilepath1 + "/"
            filepath2 = tempfilepath2 + "/"
            if os.path.lexists(filepath2) or os.path.lexists(tempfilepath2):
                if os.path.lexists(filepath1) == False:
                    recent.append(filepath2)
                else: 
                    file1date = os.path.getmtime(filepath1)
                    file2date = os.path.getmtime(filepath2)
                    #compare dates
                    if file1date > file2date:
                        recent.append(filepath1)
                    else:
                        recent.append(filepath2)
            else:
                recent.append(filepath1)
    newlist = recent[:]

    for i in newlist:
        if "nvim" in i:
            append = i + "init.vim"
            recent.remove(i)
    
    recent.append(append)
    newlist = recent[:]

    if mode == "1":
        for i in newlist:
            if "/.config" in i or os.getenv("HOME") + "/.bashrc" in i:
                recent.remove(i)
    else:
        for i in newlist:
            if "/dotfiles/config/" in i:
                recent.remove(i)

    return recent


def copytodots(recent):
    changes = ""
    for f in recent:
        if ".bashrc" in f:
            changes += f + " will be copied to ~/ \n"
        else:
            changes +=  f + " will be copied to ~/.config/ \n"
    print("The following changes will be made:")
    print(changes)
    verify = input("Are you sure you want to make these canges? (Y/n) \n -> ")
    if verify == "" or verify == "y" or verify == "Y":
        for f in recent:
            if ".bashrc" in f:
                os.system("cp " + f + " ~/")
            else:
                os.system("cp -r " +f + " ~/.config/")
    else:
        print("Automatic copy aborted")
        manual = input("Do you want to manually select what files do you want to copy (from previously checked most recent files)? (N/y) \n -> ")
        if manual == "y" or manual == "Y":
            for f in recent:
                if ".bashrc" in f:
                    confirm = input("Do you want to copy this file (N/y): \n" + f + "\n -> ")
                    if confirm ==  "y" or confirm == "Y":
                        os.system("cp " + f + " ~/")
                        print(f + " has been copied")
                    else:
                        print("Skipping " + f + "...")
                else:
                    confirm = input("Do you want to copy this file (N/y): \n" + f + "\n -> ")
                    if confirm == "y" or confirm == "Y":
                        os.system("cp -r " +f + " ~/.config/")
                        print(f + " has been copied")
                    else:
                        print("Skipping " + f + "...")


def copytodots2(recent):
    changes = ""
    for f in recent:
        changes +=  f + " will be copied to dotfiles/config/ \n"
    print("The following changes will be made:")
    print(changes)
    verify = input("Are you sure you want to make these canges? (Y/n) \n -> ")
    if verify == "" or verify == "y" or verify == "Y":
        for f in recent:
            os.system("cp -r " + f + " ./")
    else:
        print("Automatic copy aborted")
        manual = input("Do you want to manually select what files do you want to copy (from previously checked most recent files)? (N/y) \n -> ")
        if manual == "y" or manual == "Y":
            for f in recent:
                confirm = input("Do you want to copy this file (N/y): \n" + f + "\n -> ")
                if confirm == "y" or confirm == "Y":
                    os.system("cp -r " +f + " config/")
                    print(f + " has been copied")
                else:
                    print("Skipping " + f + "...")
        else:
            sys.exit()


def main():
    os.chdir(os.path.dirname(os.path.realpath(__file__)) + "/config/")
    print(os.getcwd())
    while True:
        mode = input("What do you want to do (1/2)? \n 1) Copy to local \n 2) Copy from local \n -> ")

        if mode == "1":
            gitpull = input("Do you want to start with a git pull? (Y/n) \n -> ")
            if gitpull == "N" or gitpull == "n":
                pass
            else:
                if os.system("git pull origin main") == 1:
                    print("Git pull failed")
                    sys.exit()
            files = os.listdir()
            files2 = files[:]
            for i in files2:
                if "dotfiles.py" in i:
                    files.remove(i)
            
            recent = verifydate(files, mode)
            copytodots(recent)
            break 
        elif mode == "2":
            print("""[!] This script will check for newer versions of folders/files that are all ready on the dotfiles folder[!]
If you want to add new folders/files to the dotfiles folders you will have to do it manually""")
            
            files = os.listdir()
            files2 = files[:]
            for i in files2:
                if "dotfiles.py" in i:
                    files.remove(i)
            
            recent = verifydate(files, mode)
            copytodots2(recent)
            
            gitpush = input("Do you want to finish with a git push? (Y/n) \n -> ")
            if gitpush == "N" or gitpush == "n":
                pass
            else:
                os.system("git add .")
                os.system("git commit -m \"Automatic Update\" ")
                os.system("git pull")
                os.system("git push origin main")
            break

        else:
            print("Invalid option")
            break 


if __name__ == '__main__':
    main()

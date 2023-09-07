import os


def checkbashrc(f):
    HOME = os.getenv("HOME")
    bashrc1 = HOME + "/.bashrc"
    tempbashrc2 = os.path.dirname(os.path.realpath(__file__))
    bashrc2 = tempbashrc2 + "/.bashrc"
    bashdate1 = os.path.getmtime(bashrc1)
    bashdate2 = os.path.getmtime(bashrc2)
    if bashdate1 > bashdate2:
        recentfile = bashrc1
    else: 
        recentfile = bashrc2
    return recentfile


def verifydate(files):
    HOME = os.getenv("HOME")
    path1 = HOME + "/.config/"
    path2 = os.path.dirname(os.path.realpath(__file__))

    recent = []

    for f in files:
        if f == ".bashrc":
            recent.append(checkbashrc(f))
        else:
            tempfilepath1 = os.path.join(path1, f)
            tempfilepath2 = os.path.join(path2, f)
            filepath1 = tempfilepath1 + "/"
            filepath2 = tempfilepath2 + "/"
            if os.path.lexists(filepath2):
                if os.path.lexists(filepath1) == False:
                    recent.append(filepath2)
                else: 
                    file1date = os.path.getmtime(filepath1)
                    file2date = os.path.getmtime(filepath2)
                    #compare dates
                    if file1date > file2date:
                        pass 
                    else:
                        recent.append(filepath2)
            else:
                recent.append(filepath1)
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
    verify = input("Are you sure you want to make these canges? (Y/n) \n")
    if verify == "" or verify == "y" or verify == "Y":
        for f in recent:
            if ".bashrc" in f:
                os.system("cp " + f + " ~/")
            else:
                os.system("cp -r " +f + " ~/.config/")
    else:
        print("Automatic copy aborted")
        manual = input("Do you want to manually select what files do you want to copy (from previously checked most recent files)? (N/y)")
        if manual == "y" or manual == "Y":
            for f in recent:
                if ".bashrc" in f:
                    confirm = input("Do you want to copy this file: \n" + f + "(N/y)")
                    if confirm ==  "y" or confirm == "Y":
                        os.system("cp " + f + " ~/")
                        print(f + " has been copied")
                    else:
                        print("Skipping " + f + "...")
                else:
                    confirm = input("Do you want to copy this file: \n" + f + "(N/y)")
                    if confirm == "y" or confirm == "Y":
                        os.system("cp -r " +f + " ~/.config/")
                        print(f + " has been copied")
                    else:
                        print("Skipping " + f + "...")



def main():
    os.system("git pull origin main")
    files = os.listdir(os.path.dirname(os.path.realpath(__file__)))
    
    recent = verifydate(files)
    copytodots(recent)


if __name__ == '__main__':
    main()
